// IMPORTANT -> This file is being included after socket.io
"use strict";

//io() is initialized similar to how we can access $ in jquery
// -> this will give us access to the websocket (communication channel between server and client)
const socket = io();