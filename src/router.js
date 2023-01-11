import { 
    createBrowserRouter, // allows us to create the BROWSER routes we give // without it, none of our routes will work and browser won't do anything
    createRoutesFromElements, // allows us to give routes elements // what do we mean by element??
    Route // most important because it's the element we'll pass all of our parameters from
} from "react-router-dom";
import App from './App'
import { peopleLoader, personLoader } from "./loaders";
import {createAction, updateAction, deleteAction } from "./actions";
import Index from './pages/Index';
import Show from './pages/Show';

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App/>}>
                <Route path="" element={<Index/>} loader={peopleLoader}/>
                <Route path=":id" element={<Show/>} loader={personLoader}/>
                <Route path="create" action={createAction}/>
                <Route path="create"/>
                <Route path="update/:id" action={updateAction}/>
                <Route path="delete/:id" action={deleteAction}/>
        </Route>

    )
)

export default router