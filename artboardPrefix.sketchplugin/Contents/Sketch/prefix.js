var onRun = function (context) {

  var doc = context.document;
  var pg = doc.currentPage();
  var ab = pg.currentArtboard();
  var selection = context.selection;
  var abNames = [];
  var thePage = "";
  var theLayer = "";
  var theArtboard = "";
  var selectedLayer = context.selection.firstObject();
  var selectedLayerName = selectedLayer.name();
  var masterSymbol = selectedLayer;

  // Create an alert view in the app
  var alert = [COSAlertWindow new]; 

  [alert setMessageText:"Artboard Prefix"];
  [alert setInformativeText:"Add a prefix to all selected artboards"];

  [alert addTextLabelWithValue:"Enter Prefix:"];
  [alert addTextFieldWithValue:"Hey"];

  var responseCode = [alert runModal];
  var prefixValue = [[alert viewAtIndex:1] stringValue]

    for(var i = 0; i < selection.count(); i++){
      if(selection[i].class() == "MSArtboardGroup") {
        var artboard = selection[i];
        var currentName = artboard.name();
        var currentNamePath = currentName.substring(0, currentName.lastIndexOf('/') + 1);
        var newName = currentName.slice(currentNamePath.length);

        artboard.setName(currentNamePath + prefixValue + '_' +  newName);
      }
    }
  doc.showMessage(prefixValue + ' has been added to your artboards ');
}