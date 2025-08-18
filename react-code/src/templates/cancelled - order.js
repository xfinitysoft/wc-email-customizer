import picture  from '../images/cancelled-order.png';
import Background from '../images/cancelled-order-background.png';
import logo from '../images/xfinitysoft.png';
import mobileOrder from '../images/order-mobile.png';
import facebook  from '../images/facebook.png';
import twitter  from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
export const cancelledOrder = {
    "article_id": 11,
    "title": "cancelled - order",
    "summary": "cancelled - order",
    "picture":`${picture}`,
    "etype":"wc_cancelled_order",
    "origin_source": "",
    "secret": 0,
    "level": 10,
    "created_at": 1645697464,
    "updated_at": 1645865828,
    "deleted_at": 0,
    "content": {
        "article_id": 11,
        "content":{
            "type": "page",
            "data": {
              "value": {
                "breakpoint": "480px",
                "headAttributes": "<mj-text font-size=\"14px\" />\n<mj-text line-height=\"1.7\" />\n<mj-text font-weight=\"400\" />",
                "font-size": "14px",
                "font-weight": "400",
                "line-height": "1.7",
                "headStyles": [
                  {
                    "content": ".sm-font{font-size:16px !important;line-height: 24px;}"
                  },
                  {
                    "content": ".border-top{border-top:1px solid #ccc;"
                  },
                  {
                    "content": ".border-top{border-top:1px solid #ccc;"
                  }
                ],
                "fonts": [
                  {
                    "name": "'Inter', sans-serif",
                    "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                  }
                ],
                "responsive": true,
                "font-family": "lucida Grande,Verdana,Microsoft YaHei",
                "text-color": "#000000",
                "user-style": {
                  "content": ".border-top{border-top:1px solid #ccc;"
                }
              }
            },
            "attributes": {
              "background-color": "#fff",
              "width": "700px",
              "font-family": "'Inter', sans-serif",
              "css-class": "mjml-body mjml-body"
            },
            "children": [
              {
                "type": "wrapper",
                "data": {
                  "value": []
                },
                "attributes": {
                  "border": "none",
                  "direction": "ltr",
                  "text-align": "center",
                  "background-url":`${Background}`,
                  "background-size": "100% 100%",
                  "background-repeat": "no-repeat",
                  "background-color": "#ffffff",
                  "padding": "10px 20px 0px 20px"
                },
                "children": [
                  {
                    "type": "section",
                    "data": {
                      "value": {
                        "noWrap": false
                      }
                    },
                    "attributes": {
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center",
                      "padding": "0px 0px 0px 0px"
                    },
                    "children": [
                      {
                        "type": "column",
                        "data": {
                          "value": []
                        },
                        "attributes": {
                          "border": "none",
                          "vertical-align": "top",
                          "padding": "0px 0px 0px 0px"
                        },
                        "children": [
                          {
                            "type": "image",
                            "data": {
                              "value": []
                            },
                            "attributes": {
                              "align": "center",
                              "height": "40",
                              "src": `${logo}`,
                              "width": "185",
                              "padding": "0px 0px 0px 0px"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "section",
                    "data": {
                      "value": {
                        "noWrap": false
                      }
                    },
                    "attributes": {
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center",
                      "padding": "0px 0px 0px 0px"
                    },
                    "children": [
                      {
                        "type": "column",
                        "data": {
                          "value": []
                        },
                        "attributes": {
                          "border": "none",
                          "vertical-align": "top",
                          "padding": "0px 0px 0px 5px"
                        },
                        "children": [
                          {
                            "type": "text",
                            "data": {
                              "value": {
                                "content": "Order Cancelled"
                              }
                            },
                            "attributes": {
                              "align": "left",
                              "font-size": "30px",
                              "font-family": "'Inter', sans-serif",
                              "font-weight": "700",
                              "line-height": "40px",
                              "color": "#ffffff",
                              "padding": "70px 0px 0px 0px"
                            },
                            "children": []
                          },
                          {
                            "type": "text",
                            "data": {
                              "value": {
                                "content": "Notification to let you<div>know---order <font color=\"#F1A01B\">#{{order.number}}&nbsp;</font>belonging to {{billing.full_name}} has&nbsp;</div><div>been cancelled</div>"
                              }
                            },
                            "attributes": {
                              "align": "left",
                              "font-size": "16px",
                              "font-family": "'Inter', sans-serif",
                              "line-height": "24px",
                              "font-weight": "400",
                              "color": "#ffffff",
                              "padding": "5px 15px 5px 0px"
                            },
                            "children": []
                          },
                          {
                            "type": "button",
                            "data": {
                              "value": {
                                "content": "View Order Status"
                              }
                            },
                            "attributes": {
                              "align": "left",
                              "background-color": "#F1A01B",
                              "color": "#ffffff",
                              "font-weight": "600",
                              "border-radius": "50px",
                              "line-height": "24px",
                              "target": "_blank",
                              "vertical-align": "middle",
                              "border": "none",
                              "text-align": "center",
                              "href": "#",
                              "font-family": "'Inter', sans-serif",
                              "font-size": "16px",
                              "font-style": "normal",
                              "padding": "10px 0px 10px 0px",
                              "inner-padding": "10px 30px 10px 30px"
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "type": "column",
                        "data": {
                          "value": []
                        },
                        "attributes": {
                          "border": "none",
                          "vertical-align": "top",
                          "padding": "0px 0px 0px 0px"
                        },
                        "children": [
                          {
                            "type": "advanced_image",
                            "data": {
                              "value": []
                            },
                            "attributes": {
                              "align": "center",
                              "height": "",
                              "padding": "0px 0px 0px 0px",
                              "src":`${mobileOrder}`
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "wrapper",
                "data": {
                  "value": []
                },
                "attributes": {
                  "border": "none",
                  "direction": "ltr",
                  "text-align": "center",
                  "background-color": "#ffffff",
                  "padding": "20px 20px 20px 20px"
                },
                "children": [
                  {
                    "type": "section",
                    "data": {
                      "value": {
                        "noWrap": false
                      }
                    },
                    "attributes": {
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center",
                      "background-color": "#DDFBFE",
                      "border-radius": "10px",
                      "padding": "20px 20px 20px 20px"
                    },
                    "children": [
                      {
                        "type": "column",
                        "data": {
                          "value": []
                        },
                        "attributes": {
                          "border": "none",
                          "vertical-align": "top",
                          "padding": "0px 0px 0px 0px"
                        },
                        "children": [
                          {
                            "type": "text",
                            "data": {
                              "value": {
                                "content": "Pay with cash upon delivery<br>"
                              }
                            },
                            "attributes": {
                              "align": "center",
                              "font-size": "16px",
                              "line-height": "24px",
                              "font-family": "'Inter', sans-serif",
                              "font-weight": "400",
                              "color": "#000000",
                              "font-style": "normal",
                              "padding": "0px 0px 0px 0px"
                            },
                            "children": []
                          },
                          {
                            "type": "text",
                            "data": {
                              "value": {
                                "content": "#{{order.number}}&nbsp;<div><font class=\"sm-font\" color=\"#008290\">{{order.date}}</font><br></div>"
                              }
                            },
                            "attributes": {
                              "align": "center",
                              "font-size": "25px",
                              "line-height": " 29.05px",
                              "font-family": "'Inter', sans-serif",
                              "font-weight": "600",
                              "color": "#000000",
                              "font-style": "normal",
                              "padding": "10px 0px 0px 0px"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "wrapper",
                "data": {
                  "value": []
                },
                "attributes": {
                  "border": "none",
                  "direction": "ltr",
                  "text-align": "center",
                  "background-color": "#ffffff",
                  "padding": "20px 20px 20px 20px"
                },
                "children": [
                  {
                    "type": "section",
                    "data": {
                      "value": {
                        "noWrap": false
                      }
                    },
                    "attributes": {
                      "padding": "20px 0px 20px 0px",
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center"
                    },
                    "children": [
                      {
                        "type": "ItemShipped",
                        "data": {
                          "value": {
                            "heading": "Items Shipped",
                            "subtotal": "SubTotal ( {{item.count}} items):",
                            "shipping": "Shipping:",
                            "method": "Payment Method:",
                            "total": "Order Total",
                            "width": 48
                          }
                        },
                        "attributes": {
                          "hbg-color": "#FFFFFF",
                          "h-color": "#000000",
                          "ht-padding": "0px",
                          "hl-padding": "0px",
                          "hb-padding": "0px",
                          "hr-padding": "0px",
                          "h-border-color": " #000000",
                          "h-border-width": "0px",
                          "ht-radius": "0px",
                          "h-font-size": "24px",
                          "h-font-weight": "600",
                          "h-align": "left",
                          "color": "#000000",
                          "border-color": "#E3E3E3",
                          "border-width": "1px",
                          "bt-padding": "10px",
                          "bl-padding": "20px",
                          "bb-padding": "10px",
                          "br-padding": "0px",
                          "image-radius": "10px",
                          "iborder-width": "1px",
                          "iborder-color": "#E3E3E3",
                          "image-height": "70px",
                          "image-width": "70px",
                          "image-tpadding": "15px",
                          "image-lpadding": "15px",
                          "image-bpadding": "15px",
                          "image-rpadding": "15px",
                          "ptext-tpadding": "15px",
                          "ptext-lpadding": "15px",
                          "ptext-bpadding": "0px",
                          "ptext-rpadding": "0px",
                          "bquantity-fontsize": "24px",
                          "bquantity-fontweight": "600",
                          "bquantity-color": "#000000",
                          "bprice-fontsize": "24px",
                          "bprice-fontweight": "600",
                          "bprice-color": "#008290",
                          "fhbg-color": "#ffffff",
                          "fh-color": "#000000",
                          "fht-padding": "0px",
                          "fhl-padding": "140px",
                          "fhb-padding": "0px",
                          "fhr-padding": "10px",
                          "fh-border-color": "#9b9b9b",
                          "fh-border-width": "0px",
                          "fh-font-size": "14px",
                          "fh-font-weight": "400",
                          "fh-price-color": "#000000",
                          "fh-price-size": "18px",
                          "fh-price-weight": "400",
                          "fh-align": "right",
                          "fbbg-color": "#ffffff",
                          "fb-color": "#000000",
                          "fbt-padding": "0px",
                          "fbl-padding": "0px",
                          "fbb-padding": "0px",
                          "fbr-padding": "10px",
                          "fb-border-color": "#9b9b9b",
                          "fb-border-width": "0px",
                          "fb-font-size": "14px",
                          "fb-align": "left",
                          "fb-font-weight": "600",
                          "fb-price-color": "#008290",
                          "fb-price-size": "24px",
                          "fb-price-weight": "600",
                          "firstcolumn-align": "left",
                          "Secondcolumn-align": "center",
                          "Thirdcolumn-align": "center",
                          "background-color": "#ffffff",
                          "background-repeat": "no-repeat",
                          "background-size": "cover",
                          "background-url": "",
                          "font-size": "12px",
                          "line-height": "2",
                          "padding": "0px 0px 0px 0px",
                          "border-radius": "0px 0px 0px 0px"
                        },
                        "children": []
                      }
                    ]
                  },
                  {
                    "type": "advanced_section",
                    "data": {
                      "value": {
                        "noWrap": false
                      }
                    },
                    "attributes": {
                      "padding": "20px 0px 20px 0px",
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center"
                    },
                    "children": [
                      {
                        "type": "advanced_column",
                        "data": {
                          "value": []
                        },
                        "attributes": {
                          "padding": "0px 0px 0px 0px",
                          "border": "none",
                          "vertical-align": "top"
                        },
                        "children": [
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "Billing Address "
                              }
                            },
                            "attributes": {
                              "padding": "0px 25px 10px 25px",
                              "align": "left",
                              "font-size": "20px",
                              "font-family": "'Inter', sans-serif",
                              "line-height": "26px",
                              "color": "#000000",
                              "font-weight": "600"
                            },
                            "children": []
                          },
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "{{billing.full_name}}<div>{{billing.address1}} {{billing.address2}} {{billing.city}} {{billing.zip}}&nbsp;<br><div><font color=\"#008290\">{{billing.phone}}&nbsp;</font></div><div><font color=\"#008290\">{{billing.email}}</font><br></div></div>"
                              }
                            },
                            "attributes": {
                              "padding": "0px 25px 0px 25px",
                              "align": "left",
                              "color": "#000000",
                              "font-size": "14px",
                              "font-family": "'Inter', sans-serif",
                              "font-weight": "400",
                              "line-height": "30px"
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "type": "advanced_column",
                        "data": {
                          "value": []
                        },
                        "attributes": {
                          "padding": "0px 0px 0px 0px",
                          "border": "none",
                          "vertical-align": "top"
                        },
                        "children": [
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "Shipping Address"
                              }
                            },
                            "attributes": {
                              "padding": "0px 25px 10px 25px",
                              "align": "left",
                              "font-size": "20px",
                              "font-family": "'Inter', sans-serif",
                              "line-height": "26px",
                              "color": "#000000",
                              "font-weight": "600"
                            },
                            "children": []
                          },
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "{{shipping.full_name}}<div>{{shipping.address1}} {{shipping.address2}} {{shipping.city}} {{shipping.zip}}&nbsp;<div><div style=\"--hover-color: rgb(var(--primary-4, #1890ff)); --selected-color: rgb(var(--primary-6, #1890ff));\"><font color=\"#008290\" style=\"--hover-color: rgb(var(--primary-4, #1890ff)); --selected-color: rgb(var(--primary-6, #1890ff));\">{{billing.phone}}&nbsp;</font></div><div style=\"--hover-color: rgb(var(--primary-4, #1890ff)); --selected-color: rgb(var(--primary-6, #1890ff));\"><font color=\"#008290\" style=\"--hover-color: rgb(var(--primary-4, #1890ff)); --selected-color: rgb(var(--primary-6, #1890ff));\">{{billing.email}}</font></div></div></div>"
                              }
                            },
                            "attributes": {
                              "padding": "0px 25px 0px 25px",
                              "align": "left",
                              "color": "#000000",
                              "font-size": "14px",
                              "font-family": "'Inter', sans-serif",
                              "font-weight": "400",
                              "line-height": "30px"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "wrapper",
                "data": {
                  "value": []
                },
                "attributes": {
                  "border": "none",
                  "direction": "ltr",
                  "text-align": "center",
                  "background-color": "#ffffff",
                  "css-class": "border-top ",
                  "padding": "0px 0px 0px 0px"
                },
                "children": [
                  {
                    "type": "section",
                    "data": {
                      "value": {
                        "noWrap": false
                      }
                    },
                    "attributes": {
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center",
                      "padding": "10px 0px 10px 0px"
                    },
                    "children": [
                      {
                        "type": "column",
                        "data": {
                          "value": []
                        },
                        "attributes": {
                          "padding": "0px 0px 0px 0px",
                          "border": "none",
                          "vertical-align": "top"
                        },
                        "children": [
                          {
                            "type": "social",
                            "data": {
                              "value": {
                                "elements": [
                                    {
                                      "href": "#",
                                      "icon-size": "20px",
                                      "target": "_blank",
                                      "src": `${facebook}`,
                                      "content": ""
                                    },
                                    {
                                      "href": "#",
                                      "icon-size": "20px",
                                      "target": "_blank",
                                      "src": `${twitter}`,
                                      "content": ""
                                    },
                                    {
                                      "href": "",
                                      "icon-size": "20px",
                                      "target": "_blank",
                                      "src": `${linkedin}`,
                                      "content": ""
                                    },
                                    {
                                      "href": "",
                                      "icon-size": "20px",
                                      "target": "_blank",
                                      "src": `${instagram}`,
                                      "content": ""
                                    }
                                ]
                              }
                            },
                            "attributes": {
                              "align": "center",
                              "color": "#333333",
                              "mode": "horizontal",
                              "font-size": "13px",
                              "font-weight": "normal",
                              "border-radius": "3px",
                              "padding": "10px 25px 10px 25px",
                              "inner-padding": "4px 4px 4px 4px",
                              "line-height": "22px",
                              "text-padding": "4px 4px 4px 0px",
                              "icon-padding": "0px",
                              "icon-size": "20px"
                            },
                            "children": []
                          },
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;<div>Duis sit vehicula dui sit amet ligula cursus.</div>"
                              }
                            },
                            "attributes": {
                              "padding": "0px 25px 0px 25px",
                              "align": "center",
                              "font-size": "14px",
                              "font-family": "'Inter', sans-serif",
                              "line-height": "24px",
                              "font-weight": "400",
                              "color": "#939393"
                            },
                            "children": []
                          },
                          {
                            "type": "navbar",
                            "data": {
                              "value": {
                                "links": [
                                  {
                                    "href": "/gettings-started-onboard",
                                    "content": "Privacy",
                                    "color": "#939393",
                                    "font-size": "14px",
                                    "target": "_blank",
                                    "padding": "15px 10px 15px 10px",
                                    "text-decoration": "underline",
                                    "text-transform": "capitalize",
                                    "font-family": "'Inter', sans-serif",
                                    "line-height": "24px",
                                    "font-weight": "400"
                                  },
                                  {
                                    "src": "https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg",
                                    "target": "_blank",
                                    "content": "Account",
                                    "color": "#939393",
                                    "font-size": "14px",
                                    "padding": " 10px  10px",
                                    "font-family": "'Inter', sans-serif",
                                    "line-height": "24px",
                                    "text-decoration": "underline",
                                    "text-transform": "capitalize"
                                  },
                                  {
                                    "src": "https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg",
                                    "target": "_blank",
                                    "content": "Unsubscribe",
                                    "color": "#939393",
                                    "font-size": "14px",
                                    "padding": " 10px  10px",
                                    "font-family": "'Inter', sans-serif",
                                    "line-height": "24px",
                                    "text-decoration": "underline",
                                    "text-transform": "capitalize",
                                    "font-weight": "400"
                                  }
                                ]
                              }
                            },
                            "attributes": {
                              "align": "center",
                              "base-url": "https://mjml.io"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
    },
    "tags": []
};