# 为了避免后面重复拉取,所以在项目原文件地址的时候,请使用这个命令存储账号和密码,让页面进行访问
# git config --global credential.helper wincred
git config --global credential.helper store
git_path="https://e.coding.net/wteam-khai/yingyudancixuexi/english-manager.git"

#项目路径
code_path="/frontend-project/"
#项目名称，与giturl那一致
projectName="english-manager"
#端口映射
port="8003:80"

#如果项目文件夹不存在说明没有下载过改项目代码，需要检出该项目
echo ${projectName}"存在，更新代码"
cd ${code_path}${projectName}
git pull
echo "打包运行完成"
echo "调用docker命令"

echo "停止容器"
docker stop ${projectName}

echo "删除对应容器"
docker rm ${projectName}

echo "删除对应镜像"
docker image rm ${projectName}:latest

echo "创建对应镜像"
docker build -t ${projectName}:latest .

echo "创建对应容器"
docker run --name ${projectName} -p ${port} -v ${code_path}${projectName}/dist:/dist -d ${projectName}:laster

echo "success"
