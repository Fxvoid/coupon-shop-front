
FROM node:alpine

# ���������� ������� ���������� � ����������
WORKDIR /app

# ���������� ����������� (���� package.json � package-lock.json)
COPY package.json .
COPY package-lock.json .

RUN npm install

# ���������� ��� ����� ������� � ���������
COPY . .

# ���������� ����, �� ������� ����� �������� ����������
EXPOSE 5000

# ��������� ���������� Next.js ����������
CMD ["npm", "run", "dev"]

