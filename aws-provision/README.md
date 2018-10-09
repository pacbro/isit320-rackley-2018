## Elven AWS

After you properly configure it, this program can create an AWS EC2 instance with this command:

```
node menu
```

After you create the instance, you must provision it. To provision the instance, type **Provision** at the command prompt.

## Configuration

In summary, there are three steps you must take:

- Configure the AWS SDK in **~/.aws** by creating one of two files:
    - **~/.aws/config.json**
    - **~/.aws/credentials**
- Add **ImageId**, **KeyName**, and **SecurityGroupIds** to **GetAwsInstanceParmas.js**.
- Add **AllocationId** and **InstanceId** to **AssociateElasticIps.js**     

Once you have completed these steps you can create and provision instances in about 5 minutes.

## The AWS SDK for AWS Educate

If you are using AWS Educate create a file called **credentials** in **~/.aws**:

```
[default]
aws_access_key_id=<YOUR KEY>
aws_secret_access_key=<YOUR SECRET>
aws_session_token=<WE ALSO NEED THIS ONE>
```

Aws Educate students get their keys by selecting **Account Details** on the AWS Educate site. This button is found on the same page where you see **remaining credits** and **session time**. 

- Log into AWS Education
- Select My Classrooms and go to our classroom.
- Select **Account Details**

Unfortunately, these keys expire over time, so you will have to recreate the file when your time runs out in Aws Educate. This is not true if you have a regular account.

Your AWS Educate region will be **us-east-1**. 

## The AWS SDK for AWS Regular Accounts

If you are trying to use a regular account, not an AWS Educate account, create **~/.aws/config.json**. You can leave **~/.aws/credentials**, I think:

```
{
	"region":"us-west-2",
	"accessKeyId":"YOUR KEY",
	"secretAccessKey": "YOUR SECRET"
}
```

You can also put the variables in the environment:

```
export AWS_DEFAULT_REGION=us-west-2
export AWS_ACCESS_KEY_ID=<YOUR KEY>
export AWS_SECRET_ACCESS_KEY=<SECRET>
```

These will override anything you put in **~/.aws/config.json**.

## Set Up Instance Creation

In **GetAwsInstanceParams.js** fill in:

- awsParams.ImageId
- awsParams.KeyName
- awsParams.SecurityGroupIds

You can find this information in AWS EC2 Console. 

For instance: 

```
awsParams.ImageId = 'ami-0ac01de337cb7e6';
awsParams.KeyName = 'ec2-320-inclass';
awsParams.SecurityGroupIds = ['sg-03433adeec8175'];
```

- The **KeyName** is the private key you want to associate with this instance. 
- The **SecurityGroupIds** is an array of security group IDs you want associated with this instance. I usually just have one member in the array.
- The **ImageId** is the id for the Ubuntu 18.04 Server. Select **Launch Instance** in the EC2 console and scroll down to get the ID. The ID differed in my EC2 account and my EC2 educate account.

I've set things up so you can have two configurations:

- One for your regular AWS account
- One for your AWS Educate account

You may only need one, but I have supplied you with two if you need them.

## Set up Elastic IP Association

I'm not yet creating Elastic IP automatically, but I can associate an existing IP with an instance.

In **AssociateElasticIp.js** fill in two fields. Get the information you need from the AWS Console:

```javascript
var elasticIpParams = {
    AllocationId: <YOUR ALLOCATION ID FROM ELASTIC_IP PAGE>,
    InstanceId: <YOUR EC2 INSTANCE ID FROM THE INSTANCE PAGE>
};
```

## Run the Program

You only have to fill in the above information once. Once it is filled in, you can create an EC2 instance by typing this command:

```javascript
node menu
```

That will print a help menu.

```bash
$ node menu
Usage: menu [options]

Options:

  -V, --version    output the version number
  -a, --associate  Associate Elastic IP
  -c, --create     Use your AWS account
  -e, --educate    Use AWS Educate account
  -p, --provision  Provision AWS instance pointed to by ec2-bc
  -h, --help       output usage information
``` 

To create an instance, I would type:

```javascript
node menu --create
```

Give AWS time to create your instance. Then associate your elastic ip with it:

```javascript
node menu --associate
```

## Provision

The next step is to provision your instance. But first do some setup.

## AWS SDK Config

Be sure you have an ~/.ssh/config file that contains a HOST called ec2-bc

Learn about SSH config here: https://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/

## Provision Pristine Ubuntu

This **Provision** script assumes you are trying to configure an EC2 
ubuntu instance where the user does not need to type a password to run 
sudo commands. If you are trying to configure something else, such 
as Pristine Ubuntu Server, see how to temporarily turn off sudo password 
prompts by reading this AskUbuntu post: https://askubuntu.com/a/147265/130778

Here is a brief summary of the AskUbuntu post. In Pristine Ubuntu type this:

``` 
sudo visudo
```

At the bottom of the file that **visudo** loads add something like this:

```
bcuser ALL=(ALL) NOPASSWD: ALL
```

When you are finished running both parts of this script, 
remove the line or comment it out with a hash mark:

```
# bcuser ALL=(ALL) NOPASSWD: ALL
```

Now you should once again be prompted for passwords again when you type sudo.



