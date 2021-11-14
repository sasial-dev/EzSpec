export interface Config {
	directories: Instance[];
	ignoreNames: string[];
	includeDescendants?: boolean;
	verboseLogging?: boolean;
	showOnlyFailures?: boolean;
	showExecutionTime?: boolean;
	useEmojis?: boolean;
}

export interface Test {
	// Name: string;
	// _func: TestFunction;

	// _focus: boolean;
	// _fixme?: string;

	focus: (this: Test) => void;
	fixme: (this: Test, reason: string) => void;
}

export type SkipFunction = (reason: string) => void;
export type TestFunction = (skip: SkipFunction) => Test[] | void;
