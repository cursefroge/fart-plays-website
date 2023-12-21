import Alpine from 'alpinejs';;
import { install } from '@twind/core';
import config from '/twind.config';


window.Alpine = Alpine;
Alpine.start();
install(config);