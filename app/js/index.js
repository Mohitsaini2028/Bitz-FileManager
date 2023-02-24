const fse = require('fs-extra')
const path = require('path')
const os = require('os')

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customText = document.getElementById("custom-text");
const successText = document.getElementById("success-text")
let analyseBtn = document.getElementById("analyse-button");
let  organizeBtn = document.getElementById("organize-button");
let  chartBtn = document.getElementById("chart-analyser");
chartBtn.style.visibility = "hidden";
var outputPath = path.join(os.homedir(), 'Bitz-FileManager');
// var outputPath = "D:\\Downloads\\Bitz-FileManager";

// output variables
{
    var outputPath_img = path.join(outputPath, 'My Images');
    var outputPath_icon = path.join(outputPath, 'My Icons');
    var outputPath_audio = path.join(outputPath, 'My Audios')
    var outputPath_video = path.join(outputPath, 'My Videos');
    var outputPath_doc = path.join(outputPath, 'My Documents');
    var outputPath_pdf = path.join(outputPath_doc, 'My PDFs');
    var outputPath_note = path.join(outputPath_doc, 'My Notes');
    var outputPath_word = path.join(outputPath_doc, 'Word files');
    var outputPath_excel = path.join(outputPath_doc, 'Excel files');
    var outputPath_ppt = path.join(outputPath_doc, 'My SpredSheets');
    var outputPath_otherdoc = path.join(outputPath_doc, 'Other Documents');
    var outputPath_programfiles = path.join(outputPath, 'Program Files');
    var outputPath_compresed = path.join(outputPath, 'Compresed Files');
    var outputPath_installable = path.join(outputPath, 'Installers');
    var outputPath_others = path.join(outputPath, 'Others');
}

customBtn.addEventListener("click", function () {
    realFileBtn.click();
});


realFileBtn.addEventListener("change", function () {
    if (realFileBtn.files.length > 1) {
        customText.innerHTML = realFileBtn.files.length + " files selected";
        analyseBtn.disabled = false;
        organizeBtn.disabled = false;
        // successText.style.color = '#DDEBEC';
        successText.innerHTML = '';
    } else if (realFileBtn.files.length == 1) {
        customText.innerHTML = realFileBtn.files.length + " file selected";
        // customText.innerHTML = realFileBtn.files[0].path;
        analyseBtn.disabled = false;
        organizeBtn.disabled = false;

        successText.innerHTML = '';
    }
    else {
        customText.innerHTML = "No Directory is selected."
        analyseBtn.disabled = true;
        organizeBtn.disabled = true;
        successText.innerHTML = '';
    }
});


var data = [
    {mood: "Images", total: 0, shade: "#0a9627", size: 0, lastModified: ""}, 
    {mood: "Icons", total:0, shade: "#0000FF", size:0, lastModified: ""},  
    {mood: "Audios", total: 0, shade: "#F73809", size: 0, lastModified: ""},  
    {mood: "Vidoes", total: 0, shade: "#ffc0cb", size: 0, lastModified: ""}, 
    {mood: "Documents", total:0, shade: "#321E2E", size: 0, lastModified: ""}, 
    {mood: "ProgramFiles", total:10, shade: "#ffaa00" , size: 0, lastModified: ""},  
    {mood: "CompressedFiles", total:0, shade: "#A12E2E", size: 0, lastModified: ""},
    {mood: "Installers", total:0, shade: "#ffd700", size: 0, lastModified: ""}, 
    {mood: "Other", total:0, shade: "#eeeeee", size: 0, lastModified: ""},
]


// printing the output path where files will be stored
document.getElementById('output-path').innerText = outputPath;

// moving the file according to the extension
analyseBtn.addEventListener("click", e => {

    e.preventDefault();
    for (var i = 0; i < realFileBtn.files.length; i++) {
        original_path = realFileBtn.files[i].path;
        file_name = path.basename(original_path);
        file_extension = path.extname(file_name);
        file_size = realFileBtn.files[i].size;
        last_Modified = realFileBtn.files[i].lastModifiedDate;

        console.log("file_size" + file_size);
      

        // for files with no extension
        if (file_extension === '') {
        }
        
        //for Images
        else if (file_extension === '.png' || file_extension === '.jpg' || file_extension === '.svg' || file_extension === '.jpeg' || file_extension === '.webp' || file_extension === '.apng' || file_extension === '.avif' || file_extension === '.jfif' || file_extension === '.pjepg' || file_extension === '.pjp' || file_extension === '.bmp') {
            data[0]['lastModified'] =  last_Modified;
           data[0]['total'] = data[0]['total'] + 1;
           results[0]['total'] = results[0]['total'] + 1;
           data[0]['size'] = data[0]['size'] + file_size; 
        }
        
        //for Icons
        else if (file_extension === '.ico' || file_extension === '.icns') {
            data[1]['lastModified'] =  last_Modified;
           data[1]['total'] = data[1]['total'] + 1;
           results[1]['total'] = results[1]['total'] + 1;
           data[1]['size'] = data[1]['size'] + file_size; 
        }
        
        //for Audios
        else if (file_extension === '.mp3' || file_extension === '.m4a' || file_extension === '.flac' || file_extension === '.wav' || file_extension === '.wma' || file_extension === '.aac' || file_extension === '.dif' || file_extension === '.aa' || file_extension === '.aax' || file_extension === '.m4b' || file_extension === '.m4p' || file_extension === '.mmf' || file_extension === '.msv' || file_extension === '.wma' || file_extension === '.wav' || file_extension === '.mpc') {
            data[2]['lastModified'] =  last_Modified;
            data[2]['total'] = data[2]['total'] + 1;
            results[2]['total'] = results[2]['total'] + 1;
            data[2]['size'] = data[2]['size'] + file_size; 
        }
        
        //for Videos
        else if (file_extension === '.mp4' || file_extension === '.m4a' || file_extension === '.gif' || file_extension === '.f4v' || file_extension === '.m4b' || file_extension === '.mov' || file_extension === '.webm' || file_extension === '.flv' || file_extension === '.f4v' || file_extension === '.3g2' || file_extension === '.3gp' || file_extension === '.svi' || file_extension === '.m4v' || file_extension === '.amv' || file_extension === '.vob' || file_extension === '.mkv' || file_extension === '.mpeg') {
            data[3]['lastModified'] =  last_Modified;
            data[3]['total'] = data[3]['total'] + 1;
            results[3]['total'] = results[3]['total'] + 1;
           data[3]['size'] = data[3]['size'] + file_size; 
        }
        
        //for PDFs
        else if (file_extension === '.pdf') {
            data[4]['lastModified'] =  last_Modified;
           data[4]['total'] = data[4]['total'] + 1;
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for word files
        else if (file_extension === '.doc' || file_extension === '.docx') {
            data[4]['lastModified'] =  last_Modified;
            data[4]['lastModified'] =  last_Modified;
            data[4]['total'] = data[4]['total'] + 1;
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for text files or notes
        else if (file_extension === '.txt' || file_extension === '.prn' || file_extension === '.dif' || file_extension === '.slk' || file_extension === '.wmf' || file_extension === '.emf' || file_extension === '.bmp' || file_extension === '.dif') {
            data[4]['lastModified'] =  last_Modified;
            data[4]['total'] = data[4]['total'] + 1;
            results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for excel files
        else if (file_extension === '.xls' || file_extension === '.xlsx' || file_extension === '.csv' || file_extension === '.xlsm' || file_extension === '.xlsb' || file_extension === '.xltx' || file_extension === '.xltm' || file_extension === '.xlt' || file_extension === '.xml' || file_extension === '.xlam' || file_extension === '.xla' || file_extension === '.xlw' || file_extension === '.xlr' ) {
            data[4]['lastModified'] =  last_Modified;
            data[4]['total'] = data[4]['total'] + 1;
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for ppt files
        else if (file_extension === '.pptx' || file_extension === '.pptm' || file_extension === '.ppt' || file_extension === 'potm' || file_extension === '.pot' || file_extension === '.ppsx' || file_extension === '.ppsm' || file_extension === '.pps' || file_extension === '.ppam' || file_extension === '.ppa' || file_extension === '.odp' ) {
            data[4]['lastModified'] =  last_Modified;
            data[4]['total'] = data[4]['total'] + 1;
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for other documents
        else if (file_extension === '.odt' || file_extension === '.ods' || file_extension === '.xps' || file_extension === '.dbf' || file_extension === '.accdb' || file_extension === '.pub') {
            data[4]['lastModified'] =  last_Modified;
            data[4]['total'] = data[4]['total'] + 1;
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for c++ files
        else if (file_extension === '.cpp' || file_extension === '.c' ) {
            data[5]['lastModified'] =  last_Modified;
            data[5]['total'] = data[5]['total'] + 1;
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //for c sharp files
        else if (file_extension === '.cs' ) {
            data[5]['lastModified'] =  last_Modified;
            data[5]['total'] = data[5]['total'] + 1;
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //for python files
        else if (file_extension === '.py' || file_extension === '.pyc' || file_extension === '.ipynb' ) {
            data[5]['lastModified'] =  last_Modified;
            data[5]['total'] = data[5]['total'] + 1;
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //MatLab files
        else if (file_extension === '.m' ) {
            data[5]['lastModified'] =  last_Modified;
            data[5]['total'] = data[5]['total'] + 1;
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //Java files
        else if (file_extension === '.java' ) {
            data[5]['lastModified'] =  last_Modified;
            data[5]['total'] = data[5]['total'] + 1;
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //JavaScript files
        else if (file_extension === '.js' || file_extension === '.json' ) {
            data[5]['lastModified'] =  last_Modified;
            data[5]['total'] = data[5]['total'] + 1;
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //for other program files
        else if (file_extension === '.html' || file_extension === '.htm' || file_extension === '.css' || file_extension === '.php' || file_extension === '.pl' || file_extension === '.xlm' || file_extension === '.cgi' || file_extension === '.dll') {
            data[5]['lastModified'] =  last_Modified;
            data[5]['total'] = data[5]['total'] + 1;
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //for compressed files
        else if (file_extension === '.zip' || file_extension === '.tar' || file_extension === '.gz' || file_extension === '.7z' || file_extension === '.mint' || file_extension === '.htmi' || file_extension === '.mpkg' || file_extension === '.tpsr' || file_extension === '.ice' || file_extension === '.rar' || file_extension === '.gzip' || file_extension === '.bzip' || file_extension === '.bzip2' || file_extension === '.sifz' || file_extension === '.tbz' || file_extension === '.b6z') {
            data[6]['lastModified'] =  last_Modified;
            data[6]['total'] = data[6]['total'] + 1;
           results[6]['total'] = results[6]['total'] + 1;
           data[6]['size'] = data[6]['size'] + file_size; 
        }
        
        //for installable files
        else if (file_extension === '.exe' || file_extension === '.msi' || file_extension === '.msm' || file_extension === '.msp' || file_extension === '.mst' || file_extension === '.idt' || file_extension === '.cub' || file_extension === '.pcp' || file_extension === '.bat' || file_extension === '.cmd' || file_extension === '.bin' || file_extension === '.com' || file_extension === '.cpl' || file_extension === '.job' || file_extension === '.paf' || file_extension === '.pif' || file_extension === '.ps1' || file_extension === '.res' || file_extension === '.scr' || file_extension === '.sct' || file_extension === '.vb' || file_extension === '.vbs' || file_extension === '.vbscript' || file_extension === '.ws' || file_extension === '.wsf' || file_extension === '.wsh') {
            data[7]['lastModified'] =  last_Modified;
            data[7]['total'] = data[7]['total'] + 1;
           results[7]['total'] = results[7]['total'] + 1;
           data[7]['size'] = data[7]['size'] + file_size; 
        }
        
        //for other files
        else {
           data[8]['lastModified'] =  last_Modified;
           data[8]['total'] = data[8]['total'] + 1;
           results[8]['total'] = results[8]['total'] + 1;
           data[8]['size'] = data[8]['size'] + file_size; 
        }
        
        window.localStorage.setItem("res", JSON.stringify(results));
        window.localStorage.setItem("info", JSON.stringify(data));
        // chartSetup();

    }


    chartBtn.style.visibility = "visible";
    //for printing success after execution
    // successText.style.color = 'rgb(63 90 64)';
    successText.innerHTML = '**SUCCESS**'
})


// moving the file according to the extension
organizeBtn.addEventListener("click", e => {
    e.preventDefault();
    for (var i = 0; i < realFileBtn.files.length; i++) {
        original_path = realFileBtn.files[i].path;
        file_name = path.basename(original_path);
        file_extension = path.extname(file_name);
        file_size = realFileBtn.files[i].size;



        console.log("file_size" + file_size);
        // console.log('for file ' + (i+1) + ': \n File Name is: ' + file_name + '\n Extension is: ' + file_extension + '\n Original Path is: ' + original_path);

        // for files with no extension
        if (file_extension === '') {
            
            fse.move(original_path, (outputPath_others + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
        }
        
        //for Images
        else if (file_extension === '.png' || file_extension === '.jpg' || file_extension === '.svg' || file_extension === '.jpeg' || file_extension === '.webp' || file_extension === '.apng' || file_extension === '.avif' || file_extension === '.jfif' || file_extension === '.pjepg' || file_extension === '.pjp' || file_extension === '.bmp') {
            
            fse.move(original_path, (outputPath_img + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           
           results[0]['total'] = results[0]['total'] + 1;
           data[0]['size'] = data[0]['size'] + file_size; 
        }
        
        //for Icons
        else if (file_extension === '.ico' || file_extension === '.icns') {
            
            fse.move(original_path, (outputPath_icon + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           
           results[1]['total'] = results[1]['total'] + 1;
           data[1]['size'] = data[1]['size'] + file_size; 
        }
        
        //for Audios
        else if (file_extension === '.mp3' || file_extension === '.m4a' || file_extension === '.flac' || file_extension === '.wav' || file_extension === '.wma' || file_extension === '.aac' || file_extension === '.dif' || file_extension === '.aa' || file_extension === '.aax' || file_extension === '.m4b' || file_extension === '.m4p' || file_extension === '.mmf' || file_extension === '.msv' || file_extension === '.wma' || file_extension === '.wav' || file_extension === '.mpc') {
            
            fse.move(original_path, (outputPath_audio + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[2]['total'] = results[2]['total'] + 1;
           data[2]['size'] = data[2]['size'] + file_size; 
        }
        
        //for Videos
        else if (file_extension === '.mp4' || file_extension === '.m4a' || file_extension === '.gif' || file_extension === '.f4v' || file_extension === '.m4b' || file_extension === '.mov' || file_extension === '.webm' || file_extension === '.flv' || file_extension === '.f4v' || file_extension === '.3g2' || file_extension === '.3gp' || file_extension === '.svi' || file_extension === '.m4v' || file_extension === '.amv' || file_extension === '.vob' || file_extension === '.mkv' || file_extension === '.mpeg') {
            
            fse.move(original_path, (outputPath_video + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[3]['total'] = results[3]['total'] + 1;
           data[3]['size'] = data[3]['size'] + file_size; 
        }
        
        //for PDFs
        else if (file_extension === '.pdf') {
            
            fse.move(original_path, (outputPath_pdf + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for word files
        else if (file_extension === '.doc' || file_extension === '.docx') {
            
            fse.move(original_path, (outputPath_word + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for text files or notes
        else if (file_extension === '.txt' || file_extension === '.prn' || file_extension === '.dif' || file_extension === '.slk' || file_extension === '.wmf' || file_extension === '.emf' || file_extension === '.bmp' || file_extension === '.dif') {
            
            fse.move(original_path, (outputPath_note + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for excel files
        else if (file_extension === '.xls' || file_extension === '.xlsx' || file_extension === '.csv' || file_extension === '.xlsm' || file_extension === '.xlsb' || file_extension === '.xltx' || file_extension === '.xltm' || file_extension === '.xlt' || file_extension === '.xml' || file_extension === '.xlam' || file_extension === '.xla' || file_extension === '.xlw' || file_extension === '.xlr' ) {
            
            fse.move(original_path, (outputPath_excel + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for ppt files
        else if (file_extension === '.pptx' || file_extension === '.pptm' || file_extension === '.ppt' || file_extension === 'potm' || file_extension === '.pot' || file_extension === '.ppsx' || file_extension === '.ppsm' || file_extension === '.pps' || file_extension === '.ppam' || file_extension === '.ppa' || file_extension === '.odp' ) {
            
            fse.move(original_path, (outputPath_ppt + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for other documents
        else if (file_extension === '.odt' || file_extension === '.ods' || file_extension === '.xps' || file_extension === '.dbf' || file_extension === '.accdb' || file_extension === '.pub') {
            
            fse.move(original_path, (outputPath_otherdoc + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[4]['total'] = results[4]['total'] + 1;
           data[4]['size'] = data[4]['size'] + file_size; 
        }
        
        //for c++ files
        else if (file_extension === '.cpp' || file_extension === '.c' ) {
            
            fse.move(original_path, (outputPath_programfiles + '\\C & C++\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //for c sharp files
        else if (file_extension === '.cs' ) {
            
            fse.move(original_path, (outputPath_programfiles + '\\C# Files\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //for python files
        else if (file_extension === '.py' || file_extension === '.pyc' || file_extension === '.ipynb' ) {
            
            fse.move(original_path, (outputPath_programfiles + '\\Python\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //MatLab files
        else if (file_extension === '.m' ) {
            
            fse.move(original_path, (outputPath_programfiles + '\\MatLab\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //Java files
        else if (file_extension === '.java' ) {
            
            fse.move(original_path, (outputPath_programfiles + '\\Java\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //JavaScript files
        else if (file_extension === '.js' || file_extension === '.json' ) {
            
            fse.move(original_path, (outputPath_programfiles + '\\Java Script\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //for other program files
        else if (file_extension === '.html' || file_extension === '.htm' || file_extension === '.css' || file_extension === '.php' || file_extension === '.pl' || file_extension === '.xlm' || file_extension === '.cgi' || file_extension === '.dll') {
            
            fse.move(original_path, (outputPath_programfiles + '\\Others\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[5]['total'] = results[5]['total'] + 1;
           data[5]['size'] = data[5]['size'] + file_size; 
        }
        
        //for compressed files
        else if (file_extension === '.zip' || file_extension === '.tar' || file_extension === '.gz' || file_extension === '.7z' || file_extension === '.mint' || file_extension === '.htmi' || file_extension === '.mpkg' || file_extension === '.tpsr' || file_extension === '.ice' || file_extension === '.rar' || file_extension === '.gzip' || file_extension === '.bzip' || file_extension === '.bzip2' || file_extension === '.sifz' || file_extension === '.tbz' || file_extension === '.b6z') {
            
            fse.move(original_path, (outputPath_compresed + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[6]['total'] = results[6]['total'] + 1;
           data[6]['size'] = data[6]['size'] + file_size; 
        }
        
        //for installable files
        else if (file_extension === '.exe' || file_extension === '.msi' || file_extension === '.msm' || file_extension === '.msp' || file_extension === '.mst' || file_extension === '.idt' || file_extension === '.cub' || file_extension === '.pcp' || file_extension === '.bat' || file_extension === '.cmd' || file_extension === '.bin' || file_extension === '.com' || file_extension === '.cpl' || file_extension === '.job' || file_extension === '.paf' || file_extension === '.pif' || file_extension === '.ps1' || file_extension === '.res' || file_extension === '.scr' || file_extension === '.sct' || file_extension === '.vb' || file_extension === '.vbs' || file_extension === '.vbscript' || file_extension === '.ws' || file_extension === '.wsf' || file_extension === '.wsh') {
            
            fse.move(original_path, (outputPath_installable + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[7]['total'] = results[7]['total'] + 1;
           data[7]['size'] = data[7]['size'] + file_size; 
        }
        
        //for other files
        else {
            
            fse.move(original_path, (outputPath_others + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            
           results[8]['total'] = results[8]['total'] + 1;
           data[8]['size'] = data[8]['size'] + file_size; 
        }
        
        window.localStorage.setItem("res", JSON.stringify(results));
        window.localStorage.setItem("info", JSON.stringify(data));
        // chartSetup();

    }
    //for printing success after execution
    // successText.style.color = 'rgb(63 90 64)';
    successText.innerHTML = '**SUCCESS**'
})
























// var ipc = require("electron").ipcRenderer;

// const customBtn = document.getElementById("custom-button");

// customBtn.addEventListener("click", function(){
//     ipc.send('open-dialog-to-select-dir');
// })

// ipc.on('selected-dir', function(event,path){
//     console.log(path);
// })