import createAccount   from '../images/create-account.png';
import Background from '../images/create-account-background.png';
import logo from '../images/xfinitysoft.png';
import facebook  from '../images/facebook.png';
import twitter  from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
export const newAccount = {
    "article_id": 1,
    "title": "Create Account",
    "summary": "Create Account",
    "picture": `${createAccount}`,
    "etype":"wc_new_account",
    "origin_source": "",
    "secret": 0,
    "level": 10,
    "created_at": 1645697464,
    "updated_at": 1645865828,
    "deleted_at": 0,
    "content": {
        "article_id": 1,
        "content": {
            "type": "page",
            "data": {
              "value": {
                "breakpoint": "480px",
                "headAttributes": "",
                "font-size": "16px",
                "line-height": "24px",
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
                "content-background-color": "",
                "user-style": {
                  "content": ".mjml-body {\n    background: #ffffff url("+`${Background}`+") center top / cover no-repeat;\n    background-position: top;\n    background-repeat: no-repeat;\n    background-size: 100% 400px;\n    width: 100%;\n }\n\n            "
                }
              }
            },
            "attributes": {
              "background-color": "#fff",
              "width": "700px",
              "font-family": "'Inter', sans-serif",
              "css-class":"mjml-body"
            },
            "children": [
              {
                "type": "wrapper",
                "data": {
                  "value": []
                },
                "attributes": {
                  "padding": "20px 0px 20px 0px",
                  "border": "none",
                  "direction": "ltr",
                  "text-align": "center",
                  "background-url": "",
                  "background-repeat": "no-repeat",
                  "background-size": "cover"
                },
                "children": [
                  {
                    "type": "advanced_image",
                    "data": {
                      "value": []
                    },
                    "attributes": {
                      "align": "center",
                      "height": "40",
                      "padding": "0px 0px 100px 0px",
                      "src": `${logo}`,
                      "width": "196px"
                    },
                    "children": []
                  },
                  {
                    "type": "advanced_text",
                    "data": {
                      "value": {
                        "content": "Welcome to&nbsp;{{site.name}}"
                      }
                    },
                    "attributes": {
                      "padding": "0px 0  0",
                      "align": "center",
                      "color": "#ffffff",
                      "font-family": "'Inter', sans-serif",
                      "font-size": "40px",
                      "line-height": "44px",
                      "font-weight": "700"
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
                  "padding": "165px 0px 20px 0px",
                  "border": "none",
                  "direction": "ltr",
                  "text-align": "center"
                },
                "children": [
                  {
                    "type": "advanced_text",
                    "data": {
                      "value": {
                        "content": "Hi {{user.name}},"
                      }
                    },
                    "attributes": {
                      "padding": "0px 0 23px 0",
                      "align": "center",
                      "font-size": "30px",
                      "line-height": "29px",
                      "font-weight": "600",
                      "font-family": "'Inter', sans-serif"
                    },
                    "children": []
                  },
                  {
                    "type": "advanced_text",
                    "data": {
                      "value": {
                        "content": "Thanks for creating an account on xfinity Soft. Your username is <b>{{user.name}}</b>. You can access your account area to view orders, change your password, and more at"
                      }
                    },
                    "attributes": {
                      "padding": "0px 20px 20px 20px",
                      "align": "center",
                      "font-size": "20px",
                      "line-height": "32px",
                      "font-weight": "500",
                      "font-family": "'Inter', sans-serif"
                    },
                    "children": []
                  },
                  {
                    "type": "advanced_text",
                    "data": {
                      "value": {
                        "content": "{{site.url}}/my-account/"
                      }
                    },
                    "attributes": {
                      "padding": "20px 25px 0px 25px",
                      "align": "center",
                      "font-size": "20px",
                      "line-height": "32px",
                      "font-weight": "400",
                      "font-family": "'Inter', sans-serif",
                      "color": "#0083F7",
                      "text-decoration": "underline",
                      "font-style": "normal"
                    },
                    "children": []
                  },
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
                      "font-weight": "700",
                      "border-radius": "10px",
                      "padding": "20px 25px 25px 25px",
                      "inner-padding": "20px 25px 20px 25px",
                      "line-height": "120%",
                      "target": "_blank",
                      "vertical-align": "middle",
                      "border": "none",
                      "text-align": "center",
                      "href": "#",
                      "font-family": "'Inter', sans-serif",
                      "font-size": "16px"
                    },
                    "children": []
                  },
                  {
                    "type": "advanced_text",
                    "data": {
                      "value": {
                        "content": "We look forward to seeing you soon."
                      }
                    },
                    "attributes": {
                      "padding": "0px 25px 0px 25px",
                      "align": "center",
                      "font-size": "20px",
                      "line-height": "32px",
                      "font-weight": "400",
                      "font-family": "'Inter', sans-serif",
                      "color": "#0083F7",
                      "text-decoration": "",
                      "font-style": "normal"
                    },
                    "children": []
                  }
                ]
              },
              {
                "type": "advanced_divider",
                "data": {
                  "value": []
                },
                "attributes": {
                  "align": "center",
                  "border-width": "1px",
                  "border-style": "solid",
                  "border-color": "#C9CCCF",
                  "padding": "10px 0px 10px 0px"
                },
                "children": []
              },
              {
                "type": "advanced_text",
                "data": {
                  "value": {
                    "content": "Get in Touch"
                  }
                },
                "attributes": {
                  "padding": "25px 0 10px 0",
                  "align": "center",
                  "font-size": "30px",
                  "line-height": "29px",
                  "font-weight": "600",
                  "font-family": "'Inter', sans-serif"
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
                  "padding": "0px 0px 0px 0px",
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
                                "src":`${twitter}`,
                                "content": ""
                              },
                              {
                                "href": "#",
                                "icon-size": "20px",
                                "target": "_blank",
                                "src": `${linkedin}`,
                                "content": ""
                              },
                              {
                                "href": "#",
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
                          "font-size": "18px",
                          "font-weight": "normal",
                          "border-radius": "3px",
                          "padding": "10px 25px 10px 25px",
                          "inner-padding": "4px 4px 4px 4px",
                          "line-height": "22px",
                          "text-padding": "4px 4px 4px 0px",
                          "icon-padding": "0px",
                          "icon-size": "30px",
                          "css-class": "social-media-links"
                        },
                        "children": []
                      },
                      {
                        "type": "advanced_text",
                        "data": {
                          "value": {
                            "content": "This email was sent by : {{admin.email}}<div>For any questions please send an email to {{admin.email}}</div>"
                          }
                        },
                        "attributes": {
                          "padding": "0px 25px 0px 25px",
                          "align": "center",
                          "font-size": "18px",
                          "line-height": "32px",
                          "font-weight": "400",
                          "font-family": "'Inter', sans-serif"
                        },
                        "children": []
                      },
                      {
                        "type": "advanced_text",
                        "data": {
                          "value": {
                            "content": "Privacy Policy      |      Help Center"
                          }
                        },
                        "attributes": {
                          "padding": "10px 25px 30px 25px",
                          "align": "center",
                          "font-size": "18px",
                          "line-height": "32px",
                          "font-weight": "400",
                          "font-family": "'Inter', sans-serif",
                          "color": "#0083F7"
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
        }
    },
    "tags": []
}