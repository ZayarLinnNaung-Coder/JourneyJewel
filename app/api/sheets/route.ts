import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, phone, email, subject, message } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email:
            "nexlynk@nexlynk-451909.iam.gserviceaccount.com",
        client_id: "100940013463870060970",
        private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCklt7p+ISQ66Ji\nYUbYo4Fc63/6zuv6d45Pg3iJ2jxR/Mpc7UMD3PHxMlYg5nRetGqSTGbxVLx46ih9\nxRffA8l1SJABQXAeW9c3PGW/0yGQERRZGsEOGKUO8szqOZgz3lDbLZ22DVWJb7vE\nYY2MX1CVO80L3P5u5ErY/TSZGVmP0sWzTg4XZuo5ysYHEFTxVFtGWYZZPs5Mibht\nx/aICrlV3Crtv1EMwMWay8CaUrGN1qlFbd/w0U4c3Z3OOtfMZnyMVH3/0ZA45mB8\napNIf3sf9znORIc6x3Z42a7tHR32EZO6oJdQvQR9rzTCrsPQF6ygc/KVw9e1OQy2\nrki70IW5AgMBAAECggEADARb+DdF7pLVw1sY4h5mBpPHP1e2UQ5DnLibp20AtHfB\nirFkEDckjxi+wx4wZu3DTjU32uz16dom5K/sQ0MyhVar9PuDJSRNfWHyh+PxcmRc\n2PikGdRg0MuXfI6B91+HBcm51x34HdXDnt4EiLg42PyJxxD2nsAaWud53KfGK0L5\nX+5VL0St6i6Le79LbtejYzbQOm7xlr8EA9YI3Ls6pt/HuyPc+OgnNhlFYdK5vUJF\nveQwdOXnIAYUOE1kZ+WSq4pQ7IT6cjc68tEX9wrg4cpwSh6Me67bponxqqrSF3JB\nkPe/OEuT2QPyHRPRBRWt/kbhooQt5zeikFS43Dzt5QKBgQDUvXv1naSJaBRslBLh\nCGrB4CmXSilM6jrDxpRYJQpjcGyGiTdZbRb+/XaV6zS/dF/E3tmszf3riM9yXHtb\n4Tu8Qj6VD7FUgI2Ro01nYjSIDwZRR4uE0PIN9fFC0M0xEqhmYSIezZYKQW3FDe4J\npdb64bola4SOCO0b6JxOA0vU0wKBgQDGDtIySMKVGLyFFwjWt8uSuDFay7e3wdP4\ng1qHm6dKR/YAytiIdj8//mkLD2mDCIEOqEf/E0qVP0yy4yLnVQuwxKfxBn6OeZus\nxAhRZWsbeg1rdzdYbgq6/OkpCq85AVo/9K6qKJYyiinV8b9HCYbGnNArW7EPmo8m\nJZTwPJ9TwwKBgQCH6UphX0Y31rt9ppftFmCF3f0UP3flQJssahhpu7hIURG0XcNz\nqUMQwsNZAfwf+GwarTipsqxvJmdJq5XP3DQ6kKPEvVLQJpTLH2YbD116MwcZNDkJ\nMCgEDUUGJ7l/iWj2h0WyIiuh/6zuQHj7xuxyOXWf5HG6AC/jLZd2K5rtqwKBgDz6\nvzkAMfjZ3uFTUENb32/TCk8cPfpz0SHIv4zVHdK/CT0BN138mkjHuevP2PqhGas7\noL8mX2ZIUQMa79ot0yWfxt1s1HZldsrgqHb3NN0G3S7jS8UMTH159QfP5Fc21WSv\nnz+As43oAC2A+xWSF077ZRSUbJWTTtO96nd1EtElAoGBAK2MomakkkBv+r3nWSZY\nQIzci1ORmhPk+abjxmkPery8F3Zv+TndhHCP6V88KgTcYdlCaRvHh4BmV4IQfeE+\n+7OJXQqKego8GGJiv0oLOHAaSjkPo65cji902q4qDvB2NCDRu8r55L06npCBeIsU\n5Nq5uGvJ6o18wO6f3EmQAJok\n-----END PRIVATE KEY-----\n",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const nowInJST = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Ensures 24-hour format
    }).replace(/\//g, "/"); // Keep slashes consistent

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: "1BMYGrmsRDrX3ou4Qa4UwdfQDITsQLCLfz8cxnGa8cpA",
      range: "Sheet1!A:F",
      valueInputOption: "RAW",
      requestBody: {
        values: [[fullName, email, phone, subject, message, nowInJST]],
      },
    });

    return NextResponse.json({
      message: "Data added successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error appending data to Google Sheets:", error);
    return NextResponse.json(
        { message: "Error occurred", error },
        { status: 500 }
    );
  }
}