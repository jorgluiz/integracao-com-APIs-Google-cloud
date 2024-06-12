Criar uma conta de serviço:
Acesse o Console do Google Cloud Platform (https://console.cloud.google.com/), clique no menu de navegação e vá para "IAM e administração" > "Contas de serviço". Em seguida, clique em "Criar conta de serviço" e siga as instruções para criar uma nova conta de serviço.

Gerar um arquivo de chave JSON:
Depois de criar a conta de serviço, clique nela na lista de contas de serviço e vá para a seção "Chaves". Clique em "Adicionar chave" e selecione "Criar nova chave" e, em seguida, escolha o formato JSON. Isso irá baixar um arquivo JSON contendo suas credenciais.

Definir a variável de ambiente GOOGLE_APPLICATION_CREDENTIALS:
Defina a variável de ambiente GOOGLE_APPLICATION_CREDENTIALS para o caminho do arquivo JSON que contém suas credenciais. Você pode fazer isso executando o seguinte comando no terminal:

bash
Copy code
export GOOGLE_APPLICATION_CREDENTIALS="/caminho/para/seu/arquivo-de-credenciais.json"
Certifique-se de substituir "/caminho/para/seu/arquivo-de-credenciais.json" pelo caminho real para o arquivo JSON que você baixou.

Após configurar as credenciais, você deve conseguir acessar os serviços do Google Cloud Platform sem encontrar o erro "Could not load the default credentials". Certifique-se de que seu código esteja configurado para usar as bibliotecas corretas e que as permissões necessárias estejam configuradas para a conta de serviço associada às credenciais.