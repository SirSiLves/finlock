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
    versionDate: '2022-04-02T10:18:38.586Z',
    gitCommitHash: 'aa154d4',
    versionLong: '0.0.0-aa154d4',
};
export default versions;
