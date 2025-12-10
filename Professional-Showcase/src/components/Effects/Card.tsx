import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {MainProps} from '../../config';
import {Background} from './Background';

// Created by AshrafMorningstar - https://github.com/AshrafMorningstar

type CardProps = {
	children: React.ReactNode;
	userStats: MainProps['userStats'];
};

export function Card({children, userStats}: CardProps) {
	const frame = useCurrentFrame();

	if (!userStats) {
		return null;
	}

	// Animation for border gradient
	const rotation = frame * 2;

	return (
		<AbsoluteFill className="bg-transparent font-sans text-white">
			<Background />

			{/* Main Content Container with Premium Glassmorphism */}
			<AbsoluteFill className="p-4 flex items-center justify-center">
				<div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex flex-col group">
					{/* Moving Gradient Border */}
					<div
						className="absolute -inset-[150%] opacity-40 blur-xl" // Extended inset for full coverage
						style={{
							background: `conic-gradient(from ${rotation}deg, #FF0080, #7928CA, #FF0080)`,
						}}
					/>

					{/* Inner Content Background (The actual glass card) */}
					<div className="absolute inset-[1px] bg-slate-900/80 backdrop-blur-2xl rounded-2xl flex flex-col overflow-hidden">
						{/* Top shine effect */}
						<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />

						{/* Watermark with Pulse */}
						<div className="absolute top-4 right-5 z-50 flex items-center gap-2">
							<div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
							<span
								className="text-[10px] font-bold tracking-[0.2em] text-cyan-100 uppercase drop-shadow-md"
								style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.5)'}}
							>
								AshrafMorningstar
							</span>
						</div>

						{/* Content */}
						<div className="relative z-10 flex-1 w-full h-full p-2">
							{children}
						</div>
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
}
