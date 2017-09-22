var onRun = function (context) {
  var doc = context.document;
  var selection = context.selection;
  var alert = [COSAlertWindow new]; 

  if(selection.count() == 0) {
    
    doc.showMessage("notning is selected");
  } else {

    // Create an alert view in the app

  [alert setMessageText:"Artboard Prefix"];
  [alert setInformativeText:"Add a prefix to all selected artboards"];

  [alert addTextLabelWithValue:"Enter Prefix:"];
  [alert addTextFieldWithValue:"MY PREFIX"];

  var responseCode = [alert runModal];
  var prefixValue = [[alert viewAtIndex:1] stringValue]

    for(var i = 0; i < selection.count(); i++) {
      if(selection[i].class() == "MSArtboardGroup") {
        var artboard = selection[i];
        var currentName = artboard.name();
        var currentNamePath = currentName.substring(0, currentName.lastIndexOf('/') + 1);
        var newName = currentName.slice(currentNamePath.length);

        artboard.setName(currentNamePath + prefixValue + '_' +  newName);
      }
    }
  }
}