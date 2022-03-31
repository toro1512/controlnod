import express, {Application} from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuarios';
import userTypeActivities from '../routes/type_activities';
import userFood from '../routes/food';
import userFoodUnits from '../routes/food_units';
import userGroups from '../routes/groups';
import userActivities from '../routes/activities';
import userAnswers from '../routes/answers';
import userFoodMoments from '../routes/food_moments';
import userIntensities from '../routes/intensities'; 
import userPhysicalUnits from '../routes/physical_units'; 
import userPhysicalMeasures from '../routes/physical_measures'; 
import userQuestions from '../routes/questions'; 





class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        type_activities:'/api/typesActivities',
        food:'/api/food',
        groups:'/api/groups',
        foodUnit:'/api/foodUnits',
        activities:'/api/activities',
        intensities:'/api/intensities',
        answers:'/api/answers',
        quesrtions:'/api/questions',
        physicalMeasures:'/api/physicalMeasures',
        physicalUnit:'/api/physicalUnits',
        foodMoment:'/api/foodMoments'
        
    }
//constructor
    constructor(){
        
        this.app=express();
        this.port = process.env.PORT || '3030';
        this.middlewares();
        //rutas
        this.routes();
    }


//middlewares    
    middlewares() {
        //cors 
        this.app.use( cors() );
        // lectura body
        this.app.use( express.json() );
        //public
        this.app.use( express.static('public'));

    }
  
//rutas     
    routes(){

        this.app.use(this.apiPaths.usuarios, userRoutes);
        this.app.use(this.apiPaths.type_activities,userTypeActivities);
        this.app.use(this.apiPaths.foodUnit, userFoodUnits);
        this.app.use(this.apiPaths.foodMoment, userFoodMoments);
        this.app.use(this.apiPaths.groups, userGroups);
        this.app.use(this.apiPaths.food, userFood);
        this.app.use(this.apiPaths.activities, userActivities);
        this.app.use(this.apiPaths.answers, userAnswers);
        this.app.use(this.apiPaths.intensities, userIntensities);
        this.app.use(this.apiPaths.physicalUnit, userPhysicalUnits);
        this.app.use(this.apiPaths.physicalMeasures, userPhysicalMeasures);
        this.app.use(this.apiPaths.quesrtions, userQuestions);





       
    }
//servidor
    listen(){
        this.app.listen(this.port, () => {
           console.log('Servidor en ..' + this.port);
        })
    }
}  
export default Server;