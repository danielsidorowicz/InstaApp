import fileController from "./fileController.js";
import getRequestData from "./getRequestData.js";


const router = async (req, res) => {
    switch (req.method) {
        case "GET":

            break;
        case "POST":
            if (req.url == "/api/photos") {

                let newPhotoData = await fileController.add(req)

                console.log(newPhotoData);


                res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
                res.end(JSON.stringify({ status: 200, data: "trolley" }))
            }

            break;

    }
}

export default router