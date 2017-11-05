
import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Layout from './Layout'
import Routes from './RoutePaths';
import { About } from './about/About';

declare var Ext:any;

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');

export default function App() {
    
        return (   
            <Router>                    
              <Layout >
             </Layout>            
             </Router>
             
        )        
    }