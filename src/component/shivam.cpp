

int permute(string s , string answer,int count,int passwords_count)
{
	if(s.length() == 0)
	{
		for(int i=0;i<passwords_count;i++){
            if(answer==ans[i]){
                count++;
            }
        }
		return;
	}
	for(int i=0 ; i<s.length() ; i++)
	{
		char ch = s[i];
		string left_substr = s.substr(0,i);
		string right_substr = s.substr(i+1);
		string rest = left_substr + right_substr;
		permute(rest , answer+ch);
	}
    return count;
}


	



string convertToString(char* a)
{
    string s(a);

 
    return s;
}

int countBoxes(char* digits,int passwords_count,char** passwords){
     string ans = convertToString(digits);
     string answer="";
     int count=0;
     
    int finalans= permute(ans , answer,count,passwords_count);
    return finalans;
}