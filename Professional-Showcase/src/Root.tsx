import {CalculateMetadataFunction, Composition, getInputProps} from 'remotion';
import './style.css';

// Created by AshrafMorningstar - https://github.com/AshrafMorningstar

import {
	convertWeeksToDays,
	getUserStats,
	sortAndMergeContributionData,
	sortAndMergeTopLanguages,
} from './functions/setup';
import {Config, MainProps, mainSchema} from './config';
import {defaultStats} from './defaultStats';
import {Card} from './components/Effects/Card';
import {cards} from './components/Cards';

const {FPS, DurationInFrames} = Config;

export const RemotionRoot = () => {
	const calculateMetadata: CalculateMetadataFunction<MainProps> = async (
		props,
	) => {
		const {usernames, userStats: inputUserStats} = getInputProps() as {
			usernames: string[];
			userStats?: MainProps['userStats'];
		};

		let userStats = inputUserStats;

		if (userStats) {
			convertWeeksToDays(userStats);
			sortAndMergeContributionData(userStats);
			userStats = sortAndMergeTopLanguages(userStats);
		} else {
			userStats = await getUserStats(usernames);
		}

		return {
			props: {
				...props,
				userStats,
			},
		};
	};

	return (
		<>
			{cards.map(({id, component: Component, height, width = 500}) => (
				<Composition
					key={id}
					id={id}
					component={(props) => (
						<Card userStats={props.userStats}>
							<Component userStats={props.userStats} />
						</Card>
					)}
					durationInFrames={DurationInFrames}
					fps={FPS}
					width={width}
					height={height}
					schema={mainSchema}
					calculateMetadata={calculateMetadata}
					defaultProps={{
						userStats: defaultStats,
					}}
				/>
			))}
		</>
	);
};
