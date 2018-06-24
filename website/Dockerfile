FROM microsoft/dotnet
WORKDIR /app
COPY ./bin/Release/netcoreapp2.0/publish .
ENTRYPOINT ["dotnet", "website.dll"]
