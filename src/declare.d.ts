import { Test, TestFunction } from "Types";

declare function declare(name: string, func: TestFunction): Test;

export = declare;
