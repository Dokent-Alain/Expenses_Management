SELECT TOP (1000) [ID]
      ,[Last_name]
      ,[First_name]
      ,[Email]
      ,[Password]
  FROM [M_Depense].[dbo].[User]
    WHERE [User.ID]=@User.ID
