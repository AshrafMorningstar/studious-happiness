import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {useMemo} from 'react';

// Created by AshrafMorningstar - https://github.com/AshrafMorningstar

export const Background = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	// High-performance particle system
	const particles = useMemo(() => {
		return new Array(150).fill(0).map(() => ({
			x: Math.random() * width,
			y: Math.random() * height,
			size: Math.random() * 3 + 0.5,
			speedY: Math.random() * 0.5 + 0.1,
			speedX: (Math.random() - 0.5) * 0.2,
			opacity: Math.random() * 0.6 + 0.2,
			color: Math.random() > 0.5 ? '#00d2ff' : '#a78bfa', // Cyan or Violet
		}));
	}, [width, height]);

	// Smooth animation time
	const t = frame * 0.02;

	return (
		<AbsoluteFill className="bg-[#020617] overflow-hidden">
			{/* Deep Cosmological Base */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />

			{/* Aurora / Nebula Effects - Multi-layered */}
			<div
				className="absolute rounded-full opacity-40 blur-[150px] mix-blend-screen"
				style={{
					background: 'conic-gradient(from 0deg, #00d2ff, #3b82f6, #00d2ff)',
					width: width * 1.2,
					height: width * 1.2,
					top: -width * 0.4 + Math.sin(t * 0.3) * 50,
					left: -width * 0.3 + Math.cos(t * 0.2) * 50,
				}}
			/>

			<div
				className="absolute rounded-full opacity-30 blur-[120px] mix-blend-screen"
				style={{
					background: 'conic-gradient(from 180deg, #a855f7, #6366f1, #a855f7)',
					width: width * 1.0,
					height: width * 1.0,
					bottom: -width * 0.3 - Math.cos(t * 0.3) * 60,
					right: -width * 0.3 - Math.sin(t * 0.4) * 60,
				}}
			/>

			{/* Cyberpunk Accent Glow */}
			<div
				className="absolute rounded-full opacity-20 blur-[100px] mix-blend-color-dodge"
				style={{
					background: '#f472b6',
					width: width * 0.5,
					height: width * 0.5,
					top: height * 0.5 + Math.sin(t * 0.8) * 100,
					left: width * 0.5 + Math.cos(t * 0.8) * 100,
				}}
			/>

			{/* Starfield Particles */}
			{particles.map((p, i) => {
				const yPos = (p.y - frame * p.speedY) % height;
				const finalY = yPos < 0 ? yPos + height : yPos;

				const xPos = (p.x + frame * p.speedX) % width;
				const finalX = xPos < 0 ? xPos + width : xPos;

				return (
					<div
						key={i}
						className="absolute rounded-full"
						style={{
							left: finalX,
							top: finalY,
							width: p.size,
							height: p.size,
							backgroundColor: p.color,
							opacity: p.opacity + Math.sin(frame * 0.1 + i) * 0.2, // Twinkle
							boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
						}}
					/>
				);
			})}

			{/* 3D Hexagonal Grid Floor */}
			<AbsoluteFill
				style={{
					backgroundImage: `
                        linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), 
                        linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
                    `,
					backgroundSize: '60px 60px',
					opacity: 0.25,
					maskImage: 'linear-gradient(to bottom, transparent, black 40%)',
					transform: `perspective(1000px) rotateX(60deg) translateY(${frame % 60}px) scale(2)`,
				}}
			/>

			{/* Vignette for cinematic look */}
			<div className="absolute inset-0 bg-[radial-gradient(transparent_0%,_#000000_100%)] opacity-60" />
		</AbsoluteFill>
	);
};
