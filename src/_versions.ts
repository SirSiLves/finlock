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
    name: 'finlock',
    versionDate: '2022-04-01T20:28:19.051Z',
    gitCommitHash: 'a09ff73',
    versionLong: '0.0.0-a09ff73',
};
export default versions;
