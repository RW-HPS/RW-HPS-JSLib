import { FileUtils } from '../io/index';
import { Plugin } from './data';
export { Plugin };
export declare function createPlugin(plugin: Plugin | ((context: {
    fileUtils: FileUtils;
}) => Plugin)): JavaObject;
