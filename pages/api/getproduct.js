
import nextjsDb from "../../models/nextjsDB";

export default function handler(req, res)  //req: NextApiRequest,
//   //res: NextApiResponse<Data>) {
   {
    res.status(200).json({ name: 'John Doe' })
  }