import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
    use:{
      baseURL:"https://www.saucedemo.com/",
    
      headless:false,
      channel:"chrome",
      //screenshot:"on",
    },
   reporter:[["html"]],
    testDir :"tests/"
  
    }
    testMatch:["tests"]
  
  
  export default config;