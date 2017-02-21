# Custom CSS Widget for ESRI ArcGIS Web Appbuilder Developer Edition #

This widget adds the ability to quickly add css to a web appbuilder application using the web appbuilder GUI. 

<img width="374" alt="screen_shot_2017-02-14_at_20_39_30" src="https://cloud.githubusercontent.com/assets/1280651/22948472/8d820636-f2f6-11e6-8f9b-ffb872740e8d.png">

<img width="1046" alt="screen shot 2017-02-14 at 20 39 14" src="https://cloud.githubusercontent.com/assets/1280651/22948290/c865dc06-f2f5-11e6-801d-27f0396621ab.png">

## Installation ##

* <a href="https://github.com/jonlynch/esri-webappbuilder-customCSS-widget/archive/master.zip" title="Download">Download the zip</a> and extract it to your `webappbuilder/client/stemapp/widgets` folder.
* Add the following snippet to your template config file between the scalebar and search widget. For the default app this is at `webappbuilder/client/stemapp/predefined-apps/default/config.json` 
  
  ```
  {
    uri": "widgets/CustomCSS/Widget"
  },
  ```
  
   so that it looks like  
  
    ``` 
    ...
    }, {
      "uri": "widgets/Scalebar/Widget",
      "position": {
        "left": 7,
        "bottom": 25
      },
      "version": "2.2"
    }, {
      "uri": "widgets/CustomCSS/Widget"
    }
    , {
      "uri": "widgets/Search/Widget",
      "position": {
        "left": 55,
        "top": 5
      },
      "version": "2.2"
    }, {
    ...
    ```
  
    the actual position in the list of widgets does not matter, the example above is to help those not used to editing .json files.
    
* Now when any new applications are created using that template they will have the widget added.

## Usage

Add any CSS in the editor provided. This is added as a style element to the head of your application. Whilst there is some basic syntax highlighting there is no validation. If in doubt use an online <a href="https://jigsaw.w3.org/css-validator/#validate_by_input">css validator</a>.

## FAQ

#### Q: Why is this only for WAB Developer Edition?

All custom widgets are to be used with WAB Developer Edition. It is not possible to add them to ArcGIS Online and adding them to a Portal is not recommended for a number of reasons. For more information see <a href="https://geonet.esri.com/thread/121410" title="GeoNet">here</a>.

#### Q: Why do I have to edit the template to add this widget?

This is because this widget should always be opened when the application runs and has no user interface. Adding it to the widgets in the template ensures it is available and not able to be toggled on and off by the web application user.

#### Q: How do I disable the widget

Click the eye in the top right of the widget to disable it.

<img width="92" alt="test_-_web_appbuilder_for_arcgis" src="https://cloud.githubusercontent.com/assets/1280651/22950153/97c8a342-f2fc-11e6-8b86-e08d344ce06b.png">

## Issues & Contributing

Please feel free to add a github issue or pull request if you find any strange behaviour. To date this has only been tested on Chrome (mac) and IE11.

## Licence

This widget is released under the <a href="LICENCE">MIT Licence</a>.
