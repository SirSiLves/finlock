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
    versionDate: '2022-05-19T21:27:31.250Z',
    gitCommitHash: 'ec25590',
    versionLong: '0.0.0-ec25590',
};
export default versions;
