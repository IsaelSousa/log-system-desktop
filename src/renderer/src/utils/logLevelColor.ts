
export const LogLevelColor = (logLevel: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal') => {
    if (logLevel == 'debug') {
        return '#6767ff';
    } 
    else if (logLevel == 'error') {
        return '#ff0000';
    }
    else if (logLevel == 'fatal') {
        return '#ff6e6e';
    }
    else if (logLevel == 'info') {
        return '#0028ff';
    }
    else if (logLevel == 'trace') {
        return '#00d4ff';
    }
    else if (logLevel == 'warn') {
        return '#ffc700';
    } else {
        return 'gray';
    }
}