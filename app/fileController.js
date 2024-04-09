import photos from "./model.js"
import formidable from "formidable";
import path from "path";
import fsPromises from "fs/promises"
import { log } from "console";
import { fstat } from "fs";

const __dirname = path.resolve();

const fileController = {
    add: async (newPhoto) => {
        return new Promise((resolve, reject) => {
            try {

                let form = formidable({});

                form.keepExtensions = true
                form.uploadDir = __dirname + '/app/static/upload/'

                // let pola, pliki

                form.parse(newPhoto, function (err, fields, files) {


                    resolve({ pola: fields, pliki: files })
                });



            } catch (error) {
                reject(error);
            }
        })
    },
    delete: (id) => {
        // usuwanie po id z animalsArray
    },
    update: (id) => {
        // update po id elementu animalsArray
    },
    getall: async () => {
        return tasks
    },
    getone: async (id) => {
        let x = tasks.find((task) => task.id == id)

        return x
    }

}
export default fileController