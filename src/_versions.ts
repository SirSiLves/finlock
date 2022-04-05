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
    versionDate: '2022-04-05T21:05:36.587Z',
    gitCommitHash: '40079d4',
    versionLong: '0.0.0-40079d4',
};
export default versions;
