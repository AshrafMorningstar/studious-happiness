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

	const shimmerPos = (frame * 15) % 800;

	return (
		<AbsoluteFill className="bg-[#000000] font-sans text-white flex items-center justify-center">
			<Background />

			{/* Main Card Container */}
			<div className="relative z-10 p-[1px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/20 via-white/5 to-white/10 backdrop-blur-xl">
				{/* Inner Card Background */}
				<div className="bg-black/40 backdrop-blur-md rounded-[23px] w-full h-full relative overflow-hidden flex flex-col">
					{/* Subtle Shimmer Effect on Surface */}
					<div
						className="absolute top-0 bottom-0 w-[200px] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
						style={{transform: `translateX(${shimmerPos - 300}px)`}}
					/>

					{/* Top Highlight Line */}
					<div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

					{/* Branding */}
					<div className="absolute top-5 right-6 z-50 flex items-center gap-2">
						<div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
						<span
							className="text-[9px] font-semibold tracking-[0.25em] text-white/70 uppercase"
							style={{fontFamily: '"Inter", sans-serif'}}
						>
							AshrafMorningstar
						</span>
					</div>

					{/* Content Wrapper */}
					<div className="relative z-10 flex-1 p-3">{children}</div>
				</div>
			</div>
		</AbsoluteFill>
	);
}
