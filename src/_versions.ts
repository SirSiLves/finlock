export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '0.0.0',
    name: 'finlok',
    versionDate: '2022-05-12T07:08:04.702Z',
    gitCommitHash: '36bd21e',
    versionLong: '0.0.0-36bd21e',
};
export default versions;
