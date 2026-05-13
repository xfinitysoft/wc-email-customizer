import picture  from '../images/reset-password.png';
import Background from '../images/reset-password-background.png';
import logo from '../images/xfinitysoft-black.png';
import lock from '../images/lock.png';
import facebook  from '../images/facebook.png';
import twitter  from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
export const passwordReset = {
    "article_id": 2,
    "title": "Reset Password",
    "summary": "Reset Password",
    "picture": `${picture}`,
    "etype":"wc_reset_password",
    "origin_source": "",
    "secret": 0,
    "level": 10,
    "created_at": 1645697464,
    "updated_at": 1645865828,
    "deleted_at": 0,
    "content": {
        "article_id": 2,
        "content":{
            "type": "page",
            "data": {
              "value": {
                "breakpoint": "480px",
                "headAttributes": "",
                "font-size": "14px",
                "line-height": "1.7",
                "headStyles": [],
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
                  "content": ".mt--100{margin-top:-100px;}\n.box-shadow{\nborder-top: 2px solid #E8E8E8;}"
                }
              }
            },
            "attributes": {
              "background-color": "#fff",
              "width": "700px",
              "font-family": "'Inter', sans-serif"
            },
            "children": [
              {
                "type": "wrapper",
                "data": {
                  "value": []
                },
                "attributes": {
                  "padding": "20px 0px 30px 0px",
                  "border": "none",
                  "direction": "ltr",
                  "text-align": "center"
                },
                "children": [
                  {
                    "type": "advanced_image",
                    "data": {
                      "value": []
                    },
                    "attributes": {
                      "align": "center",
                      "height": "40px",
                      "padding": "0px 0px 0px 0px",
                      "src": `${logo}`,
                      "width": "194px"
                    },
                    "children": []
                  }
                ]
              },
              {
                "type": "wrapper",
                "data": {
                  "value": []
                },
                "attributes": {
                  "padding": "110px 20px 70px 20px",
                  "border": "none",
                  "direction": "ltr",
                  "text-align": "center",
                  "background-url": `${Background}`,
                  "background-size": "100% 450px",
                  "background-repeat": "no-repeat",
                  "background-color": "#F4F7FF"
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
                      "padding": "20px 0px 0px 0px",
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center",
                      "background-color": "#ffffff",
                      "border-radius": "20px 20px 0px 0px"
                    },
                    "children": [
                      {
                        "type": "column",
                        "data": {
                          "value": []
                        },
                        "attributes": {
                          "padding": "-100px 0px 0px 0px",
                          "border": "none",
                          "vertical-align": "top",
                          "css-class": "mt--100"
                        },
                        "children": [
                          {
                            "type": "advanced_image",
                            "data": {
                              "value": []
                            },
                            "attributes": {
                              "align": "center",
                              "height": "150px",
                              "padding": "-100px 0px 0px 0px",
                              "src": `${lock}`,
                              "width": "150px"
                            },
                            "children": []
                          },
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "Password Reset Request"
                              }
                            },
                            "attributes": {
                              "padding": "40px 25px 20px 25px",
                              "align": "center",
                              "font-family": "'Inter', sans-serif",
                              "font-size": "36px",
                              "line-height": "44px",
                              "font-weight": "700",
                              "letter-spacing": "-0.02em;",
                              "color": "#000000"
                            },
                            "children": []
                          },
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "Hi {{user.name}}, Someone has requested a new password for the following account on Villa Theme Store:&nbsp;<div><br></div><div>&nbsp;Username: <b>{{user.name}}</b><b style=\"word-spacing: normal;\">&nbsp;</b></div><div><span style=\"word-spacing: normal;\">If you didn’t make this request, just ignore this email. If you’d like to proceed</span><br></div>"
                              }
                            },
                            "attributes": {
                              "padding": "20px 30px 25px 30px",
                              "align": "center",
                              "font-family": "'Inter', sans-serif",
                              "font-size": "16PX",
                              "line-height": "24PX",
                              "font-weight": "400"
                            },
                            "children": []
                          }
                        ]
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
                      "padding": "0px 0px 0px 0px",
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center",
                      "background-color": "#ffffff",
                      "border-radius": "0px 0px 20px 20px"
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
                            "type": "advanced_button",
                            "data": {
                              "value": {
                                "content": "Click to set your password"
                              }
                            },
                            "attributes": {
                              "align": "center",
                              "background-color": "#0083F7",
                              "color": "#ffffff",
                              "font-weight": "600",
                              "border-radius": "999px",
                              "padding": "10px 0px 10px 0px",
                              "inner-padding": "17px 25px 17px 25px",
                              "line-height": "120%",
                              "target": "_blank",
                              "vertical-align": "middle",
                              "border": "none",
                              "text-align": "center",
                              "href": "#",
                              "font-size": "16px",
                              "font-family": "'Inter', sans-serif"
                            },
                            "children": []
                          },
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "Thanks for reading"
                              }
                            },
                            "attributes": {
                              "padding": "20px 25px 40px 25px",
                              "align": "center",
                              "font-family": "'Inter', sans-serif",
                              "font-size": "16px",
                              "color": "#0083F7",
                              "line-height": "24px",
                              "font-weight": "400"
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
                  "padding": "40px 20px 0px 20px",
                  "border": "",
                  "direction": "ltr",
                  "text-align": "center",
                  "background-color": "#ffffff",
                  "css-class": "box-shadow"
                },
                "children": [
                  {
                    "type": "advanced_text",
                    "data": {
                      "value": {
                        "content": "Get in Touch"
                      }
                    },
                    "attributes": {
                      "padding": "0px 25px 5px 25px",
                      "align": "center",
                      "color": "#000000",
                      "font-size": "24px",
                      "line-height": "29px",
                      "font-family": "'Inter', sans-serif",
                      "letter-spacing": "-0.02em",
                      "font-weight": "600"
                    },
                    "children": []
                  },
                  {
                    "type": "section",
                    "data": {
                      "value": {
                        "noWrap": false
                      }
                    },
                    "attributes": {
                      "padding": "0px 0px 20px 0px",
                      "background-repeat": "repeat",
                      "background-size": "auto",
                      "background-position": "top center",
                      "border": "none",
                      "direction": "ltr",
                      "text-align": "center"
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
                              "padding": "0px 25px 0px 25px",
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
                                "content": "This email was sent by : {{admin.email}}<div>&nbsp;For any questions please send an email to {{admin.email}}</div>"
                              }
                            },
                            "attributes": {
                              "padding": "10px 25px 0px 25px",
                              "align": "center",
                              "font-size": "16px",
                              "line-height": "24px",
                              "font-family": "'Inter', sans-serif",
                              "font-weight": "400",
                              "color": "#000000"
                            },
                            "children": []
                          },
                          {
                            "type": "advanced_text",
                            "data": {
                              "value": {
                                "content": "Privacy Policy&nbsp; |&nbsp; Help Center"
                              }
                            },
                            "attributes": {
                              "padding": "10px 25px 10px 25px",
                              "align": "center",
                              "font-family": "'Inter', sans-serif",
                              "font-size": "16px",
                              "line-height": "24px",
                              "color": "#0083F7",
                              "font-weight": "400"
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