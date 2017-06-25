/**
 * Created by azi
 */
'use strict';

module.exports = function ($scope, $rootScope, $state, loginUser) {

   $scope.chartConfig = {
    subtitle: {
      text: 'Click and drag to zoom in.'
    },
    chart: {
      height:250,
      width: 700,
      backgroundColor: 'transparent',
      zoomType: 'xy',
      resetZoomButton: {
        position: {
          x: 0,
          y: -35
        },
        theme: {
          fill: 'white',
          stroke: 'silver',
          r: 0,
          states: {
            hover: {
              fill: '#41739D',
              style: {
                color: 'white'
              }
            }
          }
        }
      }
    },
    navigator: {
      enabled: true,
      series: {
        data: []
      }
    },
    rangeSelector: {
      enabled: false
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        fillOpacity: 0.5

      },
      column: {
        stacking: 'normal'
      },
      area: {
        stacking: 'normal',
        marker: {
          enabled: false
        }
      }

    },
    exporting: false,
    xAxis: [{
      type: 'datetime'
    }],
    yAxis: [

      { // Primary yAxis

        min: 0,
        allowDecimals: false,
        title: {
          text: 'number of notification',
          style: {
            color: '#80a3ca'
          }
        },
        labels: {
          format: '{value}',
          style: {
            color: '#80a3ca'
          }
        }


      },
      { // Secondary yAxis
        min: 0,
        allowDecimals: false,
        title: {
          text: 'usage time',
          style: {
            color: '#000s'
          }
        },
        labels: {
          format: '{value}',
          style: {
            color: '#000s'
          }
        },
        opposite: true

      }
    ],

    legend: {
      enabled: false
    },
    title: {
      text: ' '
    },
    credits: {
      enabled: false
    },

    loading: false,
    tooltip: {
      crosshairs: [
        {
          width: 1,
          dashStyle: 'dash',
          color: '#898989'
        },
        {
          width: 1,
          dashStyle: 'dash',
          color: '#898989'
        }
      ],
      headerFormat: '<div class="header">{point.key}</div>',
      pointFormat: '<div class="line"><div class="circle" style="background-color:{series.color};float:left;margin-left:10px!important;clear:left;"></div><p class="country" style="float:left;">{series.name}</p><p>{point.y:,.0f} {series.tooltipOptions.valueSuffix} </p></div>',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#a4a4a4',
      shadow: false,
      useHTML: true,
      percentageDecimals: 2,
      backgroundColor: "rgba(255,255,255,.7)",
      style: {
        padding: 0
      },
      shared: true

    },

    series: [
      {
        id: 'iphoneNotificationData',
        name: 'Notifications',
        data: [[1426204800000, 12], [1426464000000, 6], [1426550400000, 10], [1426636800000, 3]],
        type: 'column',
        yAxis: 0,
        color: '#80a3ca'
      },
      {
        id: 'iphoneUsageData',
        name: 'Usage Time',
        data: [[1426291200000, 5], [1426809600000, 26]],
        type: 'column',
        yAxis: 1,
        tooltip: {
          valueSuffix: ' sec'
        },
        color: '#000'
      }
    ],



  };

   $scope.facebook_campaign = 75;
   $scope.twitter_campaign = 50;
   $scope.conventional_media = 60;
   $scope.bill_boards = 80;
}