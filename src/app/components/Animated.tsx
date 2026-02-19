import { useRef, useEffect, useState, ElementType, ReactNode, HTMLAttributes } from 'react';

interface AnimatedProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
    delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
    threshold?: number;
    as?: ElementType;
}

export function Animated({
    children,
    animation = 'fade-up',
    delay = 0,
    threshold = 0.12,
    as: Tag = 'div',
    className = '',
    ...props
}: AnimatedProps) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const delayClass = delay ? `delay-${delay}` : '';
    const animClass = `scroll-${animation}`;
    const visClass = visible ? 'in-view' : '';

    return (
        // @ts-expect-error polymorphic ref
        <Tag
            ref={ref}
            className={`${animClass} ${visClass} ${delayClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </Tag>
    );
}
