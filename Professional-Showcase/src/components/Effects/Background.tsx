/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {useMemo} from 'react';

// Created by AshrafMorningstar - https://github.com/AshrafMorningstar

export const Background = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	// Elegant particle system
	const particles = useMemo(() => {
		return new Array(80).fill(0).map(() => ({
			x: Math.random() * width,
			y: Math.random() * height,
			size: Math.random() * 2 + 0.2, // Smaller
			speedY: Math.random() * 0.2 + 0.05,
			speedX: (Math.random() - 0.5) * 0.1,
			opacity: Math.random() * 0.5 + 0.1,
			color: Math.random() > 0.8 ? '#fcd34d' : '#e2e8f0', // Gold or Slate-200
		}));
	}, [width, height]);

	// Slower animation time
	const t = frame * 0.01;

	return (
		<AbsoluteFill className="bg-[#020617] overflow-hidden">
			{/* Deep Void Base */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-[#000000] to-black" />

			{/* Subtle Nebula Effects */}
			<div
				className="absolute rounded-full opacity-20 blur-[120px]"
				style={{
					background: '#0ea5e9', // Sky Blue
					width: width * 1.0,
					height: width * 1.0,
					top: -width * 0.4 + Math.sin(t * 0.5) * 30,
					left: -width * 0.2 + Math.cos(t * 0.3) * 30,
				}}
			/>

			<div
				className="absolute rounded-full opacity-10 blur-[150px]"
				style={{
					background: '#fbbf24', // Amber/Gold
					width: width * 0.8,
					height: width * 0.8,
					bottom: -width * 0.3 - Math.cos(t * 0.4) * 40,
					right: -width * 0.2 - Math.sin(t * 0.5) * 40,
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
							opacity: p.opacity + Math.sin(frame * 0.05 + i) * 0.2,
							boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
						}}
					/>
				);
			})}

			{/* Heavy Cinematics Vignette */}
			<div className="absolute inset-0 bg-[radial-gradient(transparent_40%,_#000000_100%)] opacity-80" />

			{/* Scanlines (Optional, keep subtle) */}
			<div
				className="absolute inset-0 pointer-events-none opacity-[0.03]"
				style={{
					background:
						'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 2px)',
				}}
			/>
		</AbsoluteFill>
	);
};
