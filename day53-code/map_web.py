from flask import Flask, render_template, jsonify
import pymysql
import requests
import json

app = Flask(__name__)

# 路由，用于加载 HTML 页面
@app.route('/')
def index():
    img_url = url_for('static', filename='fugui.png')
    return render_template('idcmap.html', img_url=img_url)

# 路由，用于提供数据给 HTML 页面
@app.route('/get_data')
def get_data():
    # 在这里编写 Python 代码来处理数据
    idc_xys = {}
    
    # 连接数据库并获取数据中心信息
    db = pymysql.connect(host='127.0.0.1',
                          user='root',
                          password='cxj@1998',
                          database='idc')
    cursor = db.cursor()
    query = "SELECT 机房名称, 地址 FROM 数据中心基本信息表"
    cursor.execute(query)
    results = cursor.fetchall()
    
    # 遍历数据中心信息，获取经纬度坐标
    for row in results:
        idc_name = row[0]
        address = row[1]
        
        # 发送地址解析请求
        params = {
            'address': address,
            "key": '5e898edf4493734fc8be7fb628ce4bb1'
        }
        url = 'http://restapi.amap.com/v3/geocode/geo'
        response = requests.get(url, params)
        answer = response.json()
        idc_xy = answer['geocodes'][0]['location']
        idc_xys[idc_name] = idc_xy
    
    # 将数据以JSON格式返回给HTML页面
    json_idcxys = []
    for idc_name, idc_xy in idc_xys.items():
        lng, lat = map(float, idc_xy.split(','))
        json_entry = {"name": idc_name, "lng": lng, "lat": lat}
        json_idcxys.append(json_entry)
    
    # 将JSON数据转换为字符串并返回
    return json.dumps(json_idcxys)

if __name__ == '__main__':
    app.run()
