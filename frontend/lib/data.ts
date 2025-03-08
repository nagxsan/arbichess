export const tools = [
    {
        cardTitle: "Broadcast Delay",
        cardDescription: "Broadcast live games with delay",
        drawerTitle: "Delay in broadcasting",
        drawerDescription: `In chess tournaments, often the top boards play their respective games on specialized chess boards. These are called DGT Boards. This electronic board has sensors in the board squares as well as the chess pieces. When the players make their moves, these sensors detect change of places for the piece and this is recorded in a .pgn file.
        
        This tool periodically checks the .pgn file specified at the location by you and uploads the latest version of the file to the FTP Server. You will provide all the details required. Please click on Next to go to the next steps or Close to go back.`
    }
]

export const enum CHESS_DELAY_FORM_FIELDS {
    delay = "delay",
    ftpHost = "ftpHost",
    ftpUsername = "ftpUsername",
    ftpPassword = "ftpPassword",
    remotePath = "remotePath",
}

export const chessDelayFormFields = [
    {
        name: CHESS_DELAY_FORM_FIELDS.delay,
        formLabel: "Delay",
        inputPlaceholder: "Delay time in minutes",
        inputType: "number",
        formDescription: "The delay time in minutes which will be used to upload file to FTP server"
    },
    {
        name: CHESS_DELAY_FORM_FIELDS.ftpHost,
        formLabel: "FTP server host",
        inputPlaceholder: "Host IP or URL",
        inputType: "text",
        formDescription: "IP address or URL of the FTP server host to upload PGN file to"
    },
    {
        name: CHESS_DELAY_FORM_FIELDS.ftpUsername,
        formLabel: "FTP server username",
        inputPlaceholder: "Username of the FTP server",
        inputType: "text",
        formDescription: "Username of the FTP server host to upload PGN file to"
    },
    {
        name: CHESS_DELAY_FORM_FIELDS.ftpPassword,
        formLabel: "FTP server password",
        inputPlaceholder: "Password of the FTP server",
        inputType: "password",
        formDescription: "Password of the FTP server host to upload PGN file to"
    },
    {
        name: CHESS_DELAY_FORM_FIELDS.remotePath,
        formLabel: "FTP server remote path",
        inputPlaceholder: "Remote path of the FTP server",
        inputType: "text",
        formDescription: "Remote path of the FTP server host where the PGN file will be uploaded"
    }
]