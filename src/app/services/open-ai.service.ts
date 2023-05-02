import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {


  constructor(private http: HttpClient) {}

  private apikey:string ="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";
  private apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';


  getCompletions(prompt: string) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apikey}` };
    const body = { prompt: prompt, max_tokens: 5 };
    return this.http.post(this.apiUrl, body, { headers });
  }
}
