import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyVisibleProps = {
	children: ReactNode;
	fallback?: ReactNode;
	rootMargin?: string;
};

const LazyVisible = ({ children, fallback = null, rootMargin = "200px" }: LazyVisibleProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isVisible) return;
		const element = containerRef.current;
		if (!element) return;

		let didCancel = false;

		if ("IntersectionObserver" in window) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (!didCancel && entry.isIntersecting) {
							setIsVisible(true);
							observer.disconnect();
						}
					});
				},
				{ root: null, rootMargin, threshold: 0.01 }
			);
			observer.observe(element);
			return () => {
				didCancel = true;
				observer.disconnect();
			};
		} else {
			// Fallback: render immediately
			setIsVisible(true);
		}
	}, [isVisible, rootMargin]);

	return <div ref={containerRef}>{isVisible ? children : fallback}</div>;
};

export default LazyVisible;

