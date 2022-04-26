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
    versionDate: '2022-04-26T19:50:40.842Z',
    gitCommitHash: 'c6e7707',
    versionLong: '0.0.0-c6e7707',
};
export default versions;
