import { useRoutes } from "react-router-dom"
import NotFound from "./NotFound"
import Enquiry from "./Enquiry"
import Reservation from "./Reservation"
import ShowReview from "./ShowReview"
import ShowContent from "./ShowContent"
import Home from "./Home"
export const MyRoutes = () => {

    let elements = useRoutes([

        {path:'/' ,element:<Home></Home>},
        {path:'/tours' ,element:<ShowContent/>},
        {path:'/reviews/:name' ,element:<ShowReview/>},
        {path:'/reservation' ,element:<Reservation/>},
        {path:'/enquiry' ,element:<Enquiry/>},
        {path:'*' ,element:<NotFound/>}

    ])
      
 return elements
}
