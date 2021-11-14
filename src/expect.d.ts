type assertions = assertionMethods & { [index: string]: assertions };

interface assertionMethods {
	invert: assertions;
	never: assertions;

	exist: () => void;
	exists: () => void;
	ok: () => void;

	equal: (expectedValue: unknown) => void;
	equals: (expectedValue: unknown) => void;

	isType: (expectedType: keyof CheckableTypes) => void;
	aType: (expectedType: keyof CheckableTypes) => void;

	isClass: (expectedClassName: keyof Instances) => void;
	aClass: (expectedClassName: keyof Instances) => void;
	instanceOf: (expectedClassName: keyof Instances) => void;

	error: () => void;
	errors: () => void;
	fail: () => void;
	fails: () => void;
	throw: () => void;
	throws: () => void;

	match: (pattern: string) => void;
	matches: (pattern: string) => void;

	contain: (expectedValue: unknown) => void;
	contains: (expectedValue: unknown) => void;
	has: (expectedValue: unknown) => void;

	containOnly: (expectedType: keyof CheckableTypes) => void;
	containsOnly: (expectedType: keyof CheckableTypes) => void;
	hasOnly: (expectedType: keyof CheckableTypes) => void;

	near: (nearValue: number, nearLimit?: number) => void;
	nears: (nearValue: number, nearLimit?: number) => void;
	nearly: (nearValue: number, nearLimit?: number) => void;

	between: (minValue: number, maxValue: number) => void;
}

declare function expect(value: unknown): assertions;

export = expect;
