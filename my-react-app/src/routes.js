import React from 'react'
import { Route } from 'react-router-dom'
import PureDemo from './components/puredemo'
import HocDemo from './components/hocdemo'
import MemoDemo from './memo/index'

export default (
    <>
      {/* <Route path="/componentdemo" component={ComponentDemo} /> */}
      <Route path="/puredemo" component={PureDemo} />
      <Route path="/hocdemo" component={HocDemo} />
      <Route path="/memodemo" component={MemoDemo} />
      {/* <Route path="/functionaldemo" component={FunctionalDemo} />
      
      <Route path="/portalsdemo" component={PortalsDemo} />
      <Route path="/suspensedemo" component={SuspenseDemo} />
      <Route path="/contextdemo" component={ContextDemo} />
     
      <Route path="/refdemo" component={RefDemo} />
      <Route path="/errdemo" component={ErrorDemo} />
      <Route path="/lifecycledemo" component={LifecycleDemo} />
      <Route path="/hookdemo" component={HookDemo} />
      <Route path="/fiberdemo" component={FiberDemo} /> */}
    </>
  )