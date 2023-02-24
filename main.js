const { app, dialog, BrowserWindow, Menu, shell } = require('electron')
const chart = require('electron-chartjs')

// var os = require('os');
// var ipc = require('electron').ipcMain;


// setting environment
process.env.NODE_ENV = 'development'
// process.env.NODE_ENV = 'production'

const isDev = process.env.NODE_ENV !== 'production' ? true : false

let mainWindow;
let versionWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        // transparent: true,
        show: false,
        title: 'Bitz File-Manager',
        width: 400,
        height: 550,
        backgroundColor: '#DDEBEC',
        resizable: isDev ? true : false,
        devTools: isDev ? true : false,
        icon: `${__dirname}/app/images/icon/logo3.png`,
        
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })
    mainWindow.loadFile(`${__dirname}/app/index.html`)
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })  
}

function createVersionWindow() {
    versionWindow = new BrowserWindow({
        parent: mainWindow,
        modal: true,
        title: 'App Version',
        width: 285,
        height: 200,
        backgroundColor: '#DDEBEC',
        resizable: isDev ? true : false,
        devTools: isDev ? true : false,
        icon: `${__dirname}/app/images/icon/logo3.png`,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })
    versionWindow.loadFile(`${__dirname}/app/version.html`)
}

function createAboutFileManagerWindow() {
    aboutFileManagerWindow = new BrowserWindow({
        parent: mainWindow,
        modal: true,
        title: 'About Bitz File Manager',
        width: 450,
        height: 430,
        backgroundColor: '#DDEBEC',
        resizable: isDev ? true : false,
        devTools: isDev ? true : false,
        icon: `${__dirname}/app/images/icon/logo3.png`,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })
    aboutFileManagerWindow.loadFile(`${__dirname}/app/aboutBitzFileManager.html`)
}

function createAboutDeveloperWindow() {
    aboutDeveloperWindow = new BrowserWindow({
        parent: mainWindow,
        modal: true,
        title: 'About Developer',
        width: 490,
        height: 600,
        backgroundColor: '#DDEBEC',
        resizable: isDev ? true : false,
        devTools: isDev ? true : false,
        icon: `${__dirname}/app/images/icon/logo3.png`,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }, 
    })
    aboutDeveloperWindow.loadFile(`${__dirname}/app/aboutDeveloper.html`)
}

function createPaypalWindow() {
    paypalWindow = new BrowserWindow({
        parent: mainWindow,
        modal: true,
        title: 'Donate: PayPal',
        width: 350,
        height: 250,
        backgroundColor: '#DDEBEC',
        resizable: isDev ? true : false,
        devTools: isDev ? true : false,
        icon: `${__dirname}/app/images/icon/logo3.png`,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })
    paypalWindow.loadFile(`${__dirname}/app/donatePayPal.html`)
}

function createUPIWindow() {
    upiWindow = new BrowserWindow({
        parent: mainWindow,
        modal: true,
        title: 'Donate: UPI',
        width: 350,
        height: 450,
        backgroundColor: '#DDEBEC',
        resizable: isDev ? true : false,
        devTools: isDev ? true : false,
        icon: `${__dirname}/app/images/icon/logo3.png`,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })
    upiWindow.loadFile(`${__dirname}/app/donateUPI.html`)
}

app.on('ready', () => {
    createMainWindow()

    // calling the custom menu created bellow
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)

    mainWindow.on('ready', ()=>mainWindow = null)
})

// to quit the application
app.on('window-all-closed', ()=>{
    app.quit()
})


// menu for application
const menu = [
    ...(isDev ? [
        {
            label: 'Developer',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { type: 'separator' },
                { role: 'toggleDevTools' },
            ],
        },
        {
            label: 'About',
            submenu: [
                { label: 'Version', click: createVersionWindow },
                { label: 'Bitz File-Manager', click: createAboutFileManagerWindow },
                { type: 'separator' },
                { label: 'Developer', click: createAboutDeveloperWindow },
                { type: 'separator' },
                { label: 'More Info', click: function(){ shell.openExternal('https://bitzmint.com') } },
            ],
        },
        {
            role: 'reload',
        },
        {
            label: 'Donate',
            submenu: [
                { label: 'PayPal', click: createPaypalWindow },
                { label: 'UPI (India)', click: createUPIWindow },
            ],
        },
        {
            label: 'Help', click: function(){ shell.openExternal('https://bitzmint.com') }
        },
    ] : [
        {
            label: 'About',
            submenu: [
                { label: 'Version', click: createVersionWindow },
                { label: 'Bitz File-Manager', click: createAboutFileManagerWindow },
                { type: 'separator' },
                { label: 'Developer', click: createAboutDeveloperWindow },
                { type: 'separator' },
                { label: 'More Info', click: function(){ shell.openExternal('https://bitzmint.com') } },
            ],
        },
        {
            role: 'reload',
        },
        {
            label: 'Donate',
            submenu: [
                { label: 'PayPal', click: createPaypalWindow },
                { label: 'UPI (India)', click: createUPIWindow },
            ],
        },
        {
            label: 'Help', click: function(){ shell.openExternal('https://bitzmint.com') }
        },
    ])
]
