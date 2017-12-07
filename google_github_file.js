function init() {
 Tabletop.init( { key: ‘15JQuP2rYvuN-AIPiXxVpxslIoJrSA66wdLYzdIVsFzQ',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)