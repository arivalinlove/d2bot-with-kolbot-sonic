/**
 *    @filename   Account.js
 *    @desc       generate data for accounts
 */

var _0x1d28=['\x67\x65\x74\x43\x6f\x6c\x75\x6d\x6e\x56\x61\x6c\x75\x65','\x68\x61\x72\x64\x63\x6f\x72\x65','\x64\x69\x66\x66\x69\x63\x75\x6c\x74\x79','\x61\x66\x74\x65\x72\x52\x65\x73\x70\x65\x63\x42\x75\x69\x6c\x64','\x55\x50\x44\x41\x54\x45\x20\x73\x6f\x6e\x69\x63\x41\x63\x63\x6f\x75\x6e\x74\x20\x53\x45\x54\x20','\x20\x3d\x20\x27','\x27\x20\x57\x48\x45\x52\x45\x20\x69\x64\x5f\x20\x3d\x20\x27','\x53\x45\x4c\x45\x43\x54\x20\x69\x64\x5f\x20\x46\x52\x4f\x4d\x20\x73\x6f\x6e\x69\x63\x41\x63\x63\x6f\x75\x6e\x74\x20\x57\x48\x45\x52\x45\x20\x69\x64\x5f\x20\x3d\x20\x27','\x63\x68\x61\x72\x43\x6c\x61\x73\x73','\x73\x6f\x72\x63\x65\x72\x65\x73\x73','\x64\x61\x74\x61\x41\x63\x74\x69\x6f\x6e','\x63\x72\x65\x61\x74\x65','\x72\x65\x61\x64','\x6c\x69\x62\x73\x2f\x73\x6f\x6e\x69\x63\x2f\x64\x61\x74\x61\x2f','\x70\x72\x6f\x66\x69\x6c\x65','\x64\x61\x74\x61\x62\x61\x73\x65\x73\x2f\x53\x6f\x6e\x69\x63\x41\x63\x63\x6f\x75\x6e\x74\x73\x2e\x73\x33\x64\x62','\x50\x52\x41\x47\x4d\x41\x20\x6d\x61\x69\x6e\x2e\x70\x61\x67\x65\x5f\x73\x69\x7a\x65\x3d\x34\x30\x39\x36\x3b','\x50\x52\x41\x47\x4d\x41\x20\x6d\x61\x69\x6e\x2e\x63\x61\x63\x68\x65\x5f\x73\x69\x7a\x65\x3d\x31\x30\x30\x30\x30\x3b','\x50\x52\x41\x47\x4d\x41\x20\x6d\x61\x69\x6e\x2e\x6c\x6f\x63\x6b\x69\x6e\x67\x5f\x6d\x6f\x64\x65\x3d\x45\x58\x43\x4c\x55\x53\x49\x56\x45\x3b','\x50\x52\x41\x47\x4d\x41\x20\x6d\x61\x69\x6e\x2e\x73\x79\x6e\x63\x68\x72\x6f\x6e\x6f\x75\x73\x3d\x4e\x4f\x52\x4d\x41\x4c\x3b','\x50\x52\x41\x47\x4d\x41\x20\x6d\x61\x69\x6e\x2e\x6a\x6f\x75\x72\x6e\x61\x6c\x5f\x6d\x6f\x64\x65\x3d\x57\x41\x4c\x3b','\x50\x52\x41\x47\x4d\x41\x20\x6d\x61\x69\x6e\x2e\x74\x65\x6d\x70\x5f\x73\x74\x6f\x72\x65\x20\x3d\x20\x4d\x45\x4d\x4f\x52\x59\x3b','\x43\x52\x45\x41\x54\x45\x20\x54\x41\x42\x4c\x45\x20\x49\x46\x20\x4e\x4f\x54\x20\x45\x58\x49\x53\x54\x53\x20\x5b\x73\x6f\x6e\x69\x63\x41\x63\x63\x6f\x75\x6e\x74\x5d\x20\x28\x5b\x69\x64\x5f\x5d\x20\x56\x41\x52\x43\x48\x41\x52\x28\x33\x32\x29\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x61\x63\x63\x6f\x75\x6e\x74\x5d\x20\x56\x41\x52\x43\x48\x41\x52\x28\x33\x32\x29\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x70\x61\x73\x73\x77\x6f\x72\x64\x5d\x20\x56\x41\x52\x43\x48\x41\x52\x28\x33\x32\x29\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x72\x65\x61\x6c\x6d\x5d\x20\x56\x41\x52\x43\x48\x41\x52\x28\x33\x32\x29\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x63\x68\x61\x72\x4e\x61\x6d\x65\x5d\x20\x56\x41\x52\x43\x48\x41\x52\x28\x33\x32\x29\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x6c\x61\x64\x64\x65\x72\x5d\x20\x49\x4e\x54\x45\x47\x45\x52\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x65\x78\x70\x61\x6e\x73\x69\x6f\x6e\x5d\x20\x49\x4e\x54\x45\x47\x45\x52\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x68\x61\x72\x64\x63\x6f\x72\x65\x5d\x20\x49\x4e\x54\x45\x47\x45\x52\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x64\x69\x66\x66\x69\x63\x75\x6c\x74\x79\x5d\x20\x56\x41\x52\x43\x48\x41\x52\x28\x33\x32\x29\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x72\x65\x73\x70\x65\x63\x4c\x65\x76\x65\x6c\x5d\x20\x49\x4e\x54\x45\x47\x45\x52\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x62\x65\x66\x6f\x72\x65\x52\x65\x73\x70\x65\x63\x42\x75\x69\x6c\x64\x5d\x20\x56\x41\x52\x43\x48\x41\x52\x28\x33\x32\x29\x20\x20\x4e\x55\x4c\x4c\x2c\x20\x5b\x61\x66\x74\x65\x72\x52\x65\x73\x70\x65\x63\x42\x75\x69\x6c\x64\x5d\x20\x56\x41\x52\x43\x48\x41\x52\x28\x33\x32\x29\x20\x20\x4e\x55\x4c\x4c\x29\x3b','\x65\x78\x69\x73\x74\x73','\x64\x61\x74\x61\x62\x61\x73\x65\x73','\x70\x61\x74\x68','\x65\x78\x65\x63\x75\x74\x65','\x63\x6c\x6f\x73\x65','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79','\x61\x6c\x6c','\x61\x63\x63\x6f\x75\x6e\x74','\x63\x68\x61\x72\x4e\x61\x6d\x65','\x72\x61\x6e\x64\x6f\x6d\x53\x74\x72\x69\x6e\x67','\x6c\x61\x64\x64\x65\x72','\x65\x78\x70\x61\x6e\x73\x69\x6f\x6e','\x49\x4e\x53\x45\x52\x54\x20\x69\x6e\x74\x6f\x20','\x44\x42\x54\x62\x6c\x41\x63\x63\x74\x73','\x20\x76\x61\x6c\x75\x65\x73\x20\x28\x27','\x27\x2c\x20\x27','\x70\x61\x73\x73\x77\x6f\x72\x64','\x72\x65\x61\x6c\x6d','\x72\x65\x73\x70\x65\x63\x4c\x65\x76\x65\x6c','\x62\x65\x66\x6f\x72\x65\x52\x65\x73\x70\x65\x63\x42\x75\x69\x6c\x64','\x61\x66\x74\x65\x72\x52\x65\x73\x70\x65\x63\x62\x75\x69\x6c\x64','\x27\x29\x3b','\x43\x4f\x4d\x4d\x49\x54\x3b','\x71\x75\x65\x72\x79','\x53\x45\x4c\x45\x43\x54\x20\x2a\x20\x46\x52\x4f\x4d\x20\x73\x6f\x6e\x69\x63\x41\x63\x63\x6f\x75\x6e\x74\x20\x57\x48\x45\x52\x45\x20\x69\x64\x5f\x20\x3d\x20\x27','\x6e\x65\x78\x74','\x72\x65\x61\x64\x79'];(function(_0x2fa33e,_0x307684){var _0x3b41ad=function(_0x322547){while(--_0x322547){_0x2fa33e['\x70\x75\x73\x68'](_0x2fa33e['\x73\x68\x69\x66\x74']());}};_0x3b41ad(++_0x307684);}(_0x1d28,0x19d));var _0x81d2=function(_0x5af94c,_0x2a8894){_0x5af94c=_0x5af94c-0x0;var _0x52778f=_0x1d28[_0x5af94c];return _0x52778f;};const Account=function(){const _0x118316=_0x81d2('0x0')+me[_0x81d2('0x1')]+'\x2e\x6a\x73\x6f\x6e';return{'\x64\x62':{'\x70\x61\x74\x68':_0x81d2('0x2'),'\x44\x42\x54\x62\x6c\x41\x63\x63\x74\x73':'\x73\x6f\x6e\x69\x63\x41\x63\x63\x6f\x75\x6e\x74\x20\x28\x69\x64\x5f\x2c\x20\x61\x63\x63\x6f\x75\x6e\x74\x2c\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x2c\x20\x72\x65\x61\x6c\x6d\x2c\x20\x63\x68\x61\x72\x4e\x61\x6d\x65\x2c\x20\x6c\x61\x64\x64\x65\x72\x2c\x20\x65\x78\x70\x61\x6e\x73\x69\x6f\x6e\x2c\x20\x68\x61\x72\x64\x63\x6f\x72\x65\x2c\x20\x64\x69\x66\x66\x69\x63\x75\x6c\x74\x79\x2c\x20\x72\x65\x73\x70\x65\x63\x4c\x65\x76\x65\x6c\x2c\x20\x62\x65\x66\x6f\x72\x65\x52\x65\x73\x70\x65\x63\x42\x75\x69\x6c\x64\x2c\x20\x61\x66\x74\x65\x72\x52\x65\x73\x70\x65\x63\x42\x75\x69\x6c\x64\x29','\x63\x72\x65\x61\x74\x65':function(){const _0x275f01=[_0x81d2('0x3'),_0x81d2('0x4'),_0x81d2('0x5'),_0x81d2('0x6'),_0x81d2('0x7'),_0x81d2('0x8'),_0x81d2('0x9')];if(!FileTools[_0x81d2('0xa')](_0x81d2('0xb'))){dopen('')['\x63\x72\x65\x61\x74\x65']('\x64\x61\x74\x61\x62\x61\x73\x65\x73');}let _0x2012de=new SQLite(this[_0x81d2('0xc')],!![]);for(let _0x569e5d of _0x275f01){_0x2012de[_0x81d2('0xd')](_0x569e5d);}_0x2012de[_0x81d2('0xe')]();return FileTools[_0x81d2('0xa')](this[_0x81d2('0xc')]);},'\x69\x6e\x73\x65\x72\x74':function(){let _0x196c55;if(SETTINGS[_0x81d2('0xf')](me[_0x81d2('0x1')])){_0x196c55=SETTINGS[me[_0x81d2('0x1')]];}else{_0x196c55=SETTINGS[_0x81d2('0x10')];_0x196c55[_0x81d2('0x11')]=Misc['\x72\x61\x6e\x64\x6f\x6d\x53\x74\x72\x69\x6e\x67'](0xf,!![]);_0x196c55[_0x81d2('0x12')]=Misc[_0x81d2('0x13')](0xf,![]);}let _0x565b61=_0x196c55[_0x81d2('0x14')]?'\x31':'\x30';let _0x25cbe1=_0x196c55[_0x81d2('0x15')]?'\x31':'\x30';let _0x1f39b1=_0x196c55['\x68\x61\x72\x64\x63\x6f\x72\x65']?'\x31':'\x30';let _0x596152=new SQLite(this[_0x81d2('0xc')],!![]);_0x596152[_0x81d2('0xd')]('\x42\x45\x47\x49\x4e\x20\x54\x52\x41\x4e\x53\x41\x43\x54\x49\x4f\x4e\x3b');while(!_0x596152[_0x81d2('0xd')](_0x81d2('0x16')+this[_0x81d2('0x17')]+_0x81d2('0x18')+me[_0x81d2('0x1')]+_0x81d2('0x19')+_0x196c55[_0x81d2('0x11')]+_0x81d2('0x19')+_0x196c55[_0x81d2('0x1a')]+'\x27\x2c\x20\x27'+_0x196c55[_0x81d2('0x1b')]+_0x81d2('0x19')+_0x196c55[_0x81d2('0x12')]+'\x27\x2c\x20\x27'+_0x565b61+_0x81d2('0x19')+_0x25cbe1+_0x81d2('0x19')+_0x1f39b1+'\x27\x2c\x20\x27\x4e\x6f\x72\x6d\x61\x6c\x27\x2c\x20\x27'+_0x196c55[_0x81d2('0x1c')]+_0x81d2('0x19')+_0x196c55[_0x81d2('0x1d')]+_0x81d2('0x19')+_0x196c55[_0x81d2('0x1e')]+_0x81d2('0x1f'))){delay(0x64);}_0x596152['\x65\x78\x65\x63\x75\x74\x65'](_0x81d2('0x20'));_0x596152[_0x81d2('0xe')]();return!![];},'\x71\x75\x65\x72\x79':function(){let _0x5057b0={};let _0x15050c=new SQLite(this[_0x81d2('0xc')],!![]);let _0x18b24c=_0x15050c[_0x81d2('0x21')](_0x81d2('0x22')+me[_0x81d2('0x1')]+'\x27\x3b');_0x18b24c[_0x81d2('0x23')]();if(_0x18b24c[_0x81d2('0x24')]){_0x5057b0[_0x81d2('0x11')]=_0x18b24c[_0x81d2('0x25')](0x1);_0x5057b0[_0x81d2('0x1a')]=_0x18b24c['\x67\x65\x74\x43\x6f\x6c\x75\x6d\x6e\x56\x61\x6c\x75\x65'](0x2);_0x5057b0[_0x81d2('0x1b')]=_0x18b24c[_0x81d2('0x25')](0x3);_0x5057b0[_0x81d2('0x12')]=_0x18b24c[_0x81d2('0x25')](0x4);_0x5057b0[_0x81d2('0x14')]=_0x18b24c['\x67\x65\x74\x43\x6f\x6c\x75\x6d\x6e\x56\x61\x6c\x75\x65'](0x5)=='\x31';_0x5057b0[_0x81d2('0x15')]=_0x18b24c[_0x81d2('0x25')](0x6)=='\x31';_0x5057b0[_0x81d2('0x26')]=_0x18b24c[_0x81d2('0x25')](0x7)=='\x31';_0x5057b0[_0x81d2('0x27')]=_0x18b24c[_0x81d2('0x25')](0x8);_0x5057b0[_0x81d2('0x1c')]=_0x18b24c['\x67\x65\x74\x43\x6f\x6c\x75\x6d\x6e\x56\x61\x6c\x75\x65'](0x9);_0x5057b0['\x62\x65\x66\x6f\x72\x65\x52\x65\x73\x70\x65\x63\x42\x75\x69\x6c\x64']=_0x18b24c[_0x81d2('0x25')](0xa);_0x5057b0[_0x81d2('0x28')]=_0x18b24c[_0x81d2('0x25')](0xb);}return _0x5057b0;},'\x75\x70\x64\x61\x74\x65':function(_0x50a05b,_0x17233f){let _0x2315f7=new SQLite(this['\x70\x61\x74\x68'],!![]);_0x2315f7[_0x81d2('0xd')]('\x42\x45\x47\x49\x4e\x20\x54\x52\x41\x4e\x53\x41\x43\x54\x49\x4f\x4e\x3b');while(!_0x2315f7[_0x81d2('0xd')](_0x81d2('0x29')+_0x50a05b+_0x81d2('0x2a')+_0x17233f+_0x81d2('0x2b')+me['\x70\x72\x6f\x66\x69\x6c\x65']+'\x27\x3b')){delay(0x64);}_0x2315f7[_0x81d2('0xd')](_0x81d2('0x20'));_0x2315f7[_0x81d2('0xe')]();return!![];},'\x65\x78\x69\x73\x74\x73':function(){let _0x10abd2=new SQLite(this[_0x81d2('0xc')],!![]);let _0x2c87d5=_0x10abd2[_0x81d2('0x21')](_0x81d2('0x2c')+me[_0x81d2('0x1')]+'\x27\x3b');_0x2c87d5[_0x81d2('0x23')]();let _0x9b3553=_0x2c87d5[_0x81d2('0x24')];_0x10abd2[_0x81d2('0xe')]();return _0x9b3553;}},'\x73\x65\x74':function(){let _0x826649;if(SETTINGS[_0x81d2('0xf')](me[_0x81d2('0x1')])){_0x826649=SETTINGS[me[_0x81d2('0x1')]];}else{_0x826649=SETTINGS[_0x81d2('0x10')];}if(_0x826649[_0x81d2('0x11')]=='')_0x826649[_0x81d2('0x11')]=Misc[_0x81d2('0x13')](0xf,!![]);if(_0x826649[_0x81d2('0x12')]=='')_0x826649['\x63\x68\x61\x72\x4e\x61\x6d\x65']=Misc[_0x81d2('0x13')](0xf,![]);_0x826649[_0x81d2('0x2d')]=_0x81d2('0x2e');_0x826649[_0x81d2('0x27')]='\x4e\x6f\x72\x6d\x61\x6c';return Misc[_0x81d2('0x2f')][_0x81d2('0x30')](_0x118316,_0x826649);},'\x67\x65\x74':function(){return Misc[_0x81d2('0x2f')][_0x81d2('0x31')](_0x118316);},'\x75\x70\x64\x61\x74\x65':function(_0x528fe6,_0x9a3834){return Misc[_0x81d2('0x2f')]['\x75\x70\x64\x61\x74\x65'](_0x118316,_0x528fe6,_0x9a3834);}};}();