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
    versionDate: '2022-04-24T16:24:27.643Z',
    gitCommitHash: '23d2873',
    versionLong: '0.0.0-23d2873',
};
export default versions;
